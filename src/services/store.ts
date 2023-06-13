import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import { rootReducer } from './reducers/rootReducer';

import { socketMiddleware } from './middleware/wsMiddleware';

const wsOrdersAllUrl: string = 'wss://norma.nomoreparties.space/orders/all';
const wsUserOrders: string = 'wss://norma.nomoreparties.space/orders';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsOrdersAllUrl), socketMiddleware(wsUserOrders))))