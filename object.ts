//object
//a type that represents the non-primitive type
// "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입

//create by object literal

const personal = { name: 'Mark', age: 39 }

//personal is not "object" type
//personal is "{}" type

//create by Object.create -> 
//Object 내장 객체

const person2 = Object.create({ name: 'Mark', age: 39 })

declare function create(o: object | null): void;

create({ prop: 0 }) //ok
create(null); //ok
create("string"); //error
create(false); //error
create(undefined); //error
create(0); //error
