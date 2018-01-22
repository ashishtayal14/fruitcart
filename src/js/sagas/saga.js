import { call, put, takeEvery, all, take, race, select } from 'redux-saga/effects'
import 'regenerator-runtime/runtime'
import _ from 'lodash'
import * as actionTypes from '../constants/constants.js'
import { getData} from '../apis/api'
import * as actions from '../actions/actions'

//backgroundTask
export function* watchAndLog() {
  while (true) {
    let action = yield take('*');
    let state = yield select();
    console.log(action);
    console.log(state);
  }
}

export function* watchStartBackgroundTask() {
  while (true) {
    yield take('*')
    yield race({
      task: call(watchAndLog),
      cancel: take('CANCEL_TASK'),
    })
  }
}
export function* fetchData() {
  try {
    const data = yield call(getData)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailure(error.message))
  }

}

export function* watchFetchAsync() {
  yield takeEvery(actionTypes.GET_DATA_REQUEST, fetchData)  
}


export function* rootSaga() {
  yield all([watchFetchAsync(), watchStartBackgroundTask()])
}