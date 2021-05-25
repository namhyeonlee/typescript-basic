//string
//다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 'string'형식을 사용
//javascript와 마찬가지로, typescript는 문자열 데이터를 둘러싸기 위해 큰따움표나 작은 따움표 사용

let Myname: string = "Mark";
let age: number = 39;

let sentence: string = `Hellow, my name is ${Myname}.
I'll be ${age+1} years old next month.
`;

console.log(sentence);