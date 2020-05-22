import { fork } from 'redux-saga/effects'
// import saga  add to yield 
function* helloSaga (){
    return yield ()=>{

    }
}

export default function* rootSaga() {
    yield fork(helloSaga)
}