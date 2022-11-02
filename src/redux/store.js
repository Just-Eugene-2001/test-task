import { configureStore } from '@reduxjs/toolkit';
import * as reducers from './exports';

export const store = configureStore({
  reducer: { ...reducers },
});
