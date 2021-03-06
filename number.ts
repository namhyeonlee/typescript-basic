//자바스크립트와 같이 타입스크립트의 모든 숫자는 부동 소수점 값입니다
//타입스크립트는 16진수 및 10진수 리터럴 외에도
//ecmascript 2015에 도입된 2진수 및 8진수 지원합니다
//nan, 1_000_000과 같은 표기 가능

let decimal: number = 6; //10진수

let hex: number = 0xf00d; //16진수

let binary: number = 0b1010; //2진수

let octal: number = 0o744; //8진수

let notANumber: number = NaN;

let underscoreNum: number = 1_000_000;