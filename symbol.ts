//symbol
//프리미티브 타입의 값을 담아서 사용
//고유하고 수정불가능한 값으로 만들어 줌
//그래서 주로 접근을 제어하는데 쓰는 경우가 많음


console.log(Symbol('foo') === Symbol('foo'));  //false

const sym = Symbol();
//sym은 고유한 값이 됨

const obj = {
    [sym]: "value",
}

obj[sym]