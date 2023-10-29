"use strict";
/**
 * Types
 */
let helloText = 'Hello'; // helloText에는 string 타입만 가능 (타입은 소문자로 쓰는거 주의)
// hello = true; // 컴파일 에러
/**
 * JS에 존재하는 7개의 타입
 */
const stringVar = 'String';
const numberVar = 1234;
const bigIntVar = BigInt(123); // tsconfig.json에서 taget의 버전변경 (es2016에서는 bigint지원하지 않음)
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 치트키 같은 타입. 남용하면 TS쓰는 의미가 없다.
let anyVar;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;
// any 타입과 차이점 - unknown타입은 다른 변수에 할당할 때 컴파일 에러남. 
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: string = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType:never = null;
// let neverType:never = undefined;
// let neverType:never = 'test';
/**
 * 리스트 타입
*/
const koreanGirlGroup = ['abc', 'defg'];
const booleanList = [true, false];
