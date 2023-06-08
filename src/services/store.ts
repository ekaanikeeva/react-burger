import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"
import { rootReducer } from './reducers/rootReducer';

import { socketMiddleware } from './middleware/wsMiddleware';

const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsUrl))))