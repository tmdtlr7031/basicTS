/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료
 * ERROR - 에러
 * LOADING - 로딩중
 * INITIAL - 초기 상태
 */
function runWork() {
    let state = 'INITIAL';
    try {
        state = 'LOADING';

        // 작업

        state = 'DONE';
    } catch (e) {
        state = 'ERROR';
    }finally{
        return state;
    }
}
runWork();

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let state = initialState;
    try {
        state = loadingState

        // 작업

        state = doneState;
    } catch (e) {
        state = errorState;
    }finally{
        return state;
    }
}
runWork2();

// enum은 첫번째 글자를 대문자로 보통 작성
enum State {
    DONE = 'DONE', // 원하는 값을 선언 (여기선 'DONE')하지 않으면 선언한 순서대로 0,1,2,3 부여됨
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}
function runWork3() {
    let state = State.INITIAL;
    try {
        state = State.LOADING

        // 작업

        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    }finally{
        return state;
    }
}
console.log(runWork3() == State.DONE);
console.log(runWork3());
