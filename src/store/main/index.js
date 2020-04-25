import { call, put, takeEvery } from 'redux-saga/effects';
import { set, setLoading } from '../../pages/main/mainSlice';
import { fetchImage } from './methods';

export function* incrementAsync() {
  yield put(setLoading(true));

  const image = yield call(fetchImage);

  yield put(setLoading(false));

  if (image.data) {
    yield put(set(image.data));
  }
}

export function* mainSaga() {
  yield takeEvery('image/fetch', incrementAsync);
}
