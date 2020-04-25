import { configureStore } from '@reduxjs/toolkit';
import historyReducer from '../pages/history/historySlice';
import mainReducer from '../pages/main/mainSlice';

export default configureStore({
  reducer: {
    history: historyReducer,
    main: mainReducer,
  },
});
