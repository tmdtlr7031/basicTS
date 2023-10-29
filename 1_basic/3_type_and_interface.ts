/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemail = 'male' | 'female';

// js는 웹에서 하나의 파일로 인식하기 때문에 2_basics.ts에서 동일한 변수명으로 인해 컴파일 에러
// 웹에서는 하나의 js 파일로 인식하고 서버에서는 파일별로 스코프를 다르게 함 - tsconfig.json에서 "moduleDetection": "force" 로 변경
const stringVar: NewStringType = 'test'; // == const stringVar: string = 'test';

type IdolType = {name:string, year?:number};

const yuJin1: {name:string; year:number} = {name:'안유진', year:2002};
const yuJin2: IdolType = {name:'안유진', year:2002};

/**
 * Interface
 * 
 */
interface IdolInterface {name:string; year:number;}
const yuJin3: IdolInterface = {name:'안유진', year:2002};

// interface안에 type 사용가능
interface IdolT{name: NewStringType; year:NewNumberType;}
const yuJin4: IdolT = {name:'안유진', year:2002};

// ? -> 입력을 해도되고 안해도 됨. type에서도 사용 가능
interface IdolOptional {name:string, year?: number};
const yuJin5: IdolOptional = {name:'안유진', year:2002};
const yuJin6: IdolOptional = {name:'안유진'};

/**
 *  interface vs type 
 *  - 1) interface 는 객체({})스타일인데 type은 나열식 (ex. type NewStringType = string;)
 */