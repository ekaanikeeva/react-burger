import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import { rootReducer } from './reducers/rootReducer';

import { socketMiddleware } from './middleware/wsMiddleware';
import { TWSFeedActions, TWSUsersActions } from '../utils/tsUtils';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from './actions/wsAction';
import { WS_CONNECTION_USER_CLOSED, WS_CONNECTION_USER_ERROR, WS_CONNECTION_USER_START, WS_CONNECTION_USER_SUCCESS, WS_GET_USER_MESSAGE, WS_SEND_USER_MESSAGE } from './actions/wsUserActions';

const feedWsActions: TWSFeedActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

const userWsActions: TWSUsersActions = {
  wsInit: WS_CONNECTION_USER_START,
  wsSendMessage: WS_SEND_USER_MESSAGE,
  onOpen: WS_CONNECTION_USER_SUCCESS,
  onClose: WS_CONNECTION_USER_CLOSED,
  onError: WS_CONNECTION_USER_ERROR,
  onMessage: WS_GET_USER_MESSAGE,
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,
  socketMiddleware(feedWsActions),
  socketMiddleware(userWsActions))))

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch