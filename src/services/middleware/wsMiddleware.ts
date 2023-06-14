import type { Middleware, MiddlewareAPI, AnyAction } from 'redux';

import { TAppDispatch } from '../../utils/tsUtils';
import { IRootState } from '../reducers/rootReducer';
export const socketMiddleware = (wsActions: any): Middleware => {
  return ((store: MiddlewareAPI<TAppDispatch, IRootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const user = getState().authReducer.user
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      if (type === wsInit) {
        // объект класса WebSocket
        socket = new WebSocket(payload);
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
      }
      if (socket) {
        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: onMessage, payload: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};

