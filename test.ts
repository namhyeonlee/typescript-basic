//타입스크립트 - static types -> 개발하면 잘못된 부분을 체크할 수 잇음
//자바스크립트 - dynamic types -> 실제로 run해야 잘못된 부분 파악 할 수 있음


//javascript
// function add1(n1, n2) {
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw new Error('Incorrect input!');
//     }

//     return n1 + n2;
// }

// const result = add(39, 28);

//typescript
function add2(n1: number, n2: number) {
    return n1 + n2;
}
const result = add2(39, 28);


//ecmascript 표준에 따른 기본 자료형은 6가지
//boolean, number, string, null, undefined, symbol, array:object형

//프로그래밍을 도울 몇가지 타입이 더 제공된다
//anym void, never, unknown
//enum
//tuple: object형