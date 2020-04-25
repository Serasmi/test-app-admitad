import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import historyReducer from '../pages/history/historySlice';
import mainReducer from '../pages/main/mainSlice';
import { mainSaga } from './main';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    history: historyReducer,
    main: mainReducer,
  },
  middleware: [sagaMiddleware],
});

// run the saga
sagaMiddleware.run(mainSaga);

export default store;
