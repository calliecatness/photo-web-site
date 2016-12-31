import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { photoTilesReducer } from './reducers/photo-tiles';

export const appStore = createStore(photoTilesReducer, applyMiddleware(thunk));
