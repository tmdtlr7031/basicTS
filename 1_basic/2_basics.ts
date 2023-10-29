/**
 * Types
 */
let helloText: string = 'Hello'; // helloText에는 string 타입만 가능 (타입은 소문자로 쓰는거 주의)
// hello = true; // 컴파일 에러

/**
 * JS에 존재하는 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 1234;
const bigIntVar: bigint = BigInt(123); // tsconfig.json에서 taget의 버전변경 (es2016에서는 bigint지원하지 않음)
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 치트키 같은 타입. 남용하면 TS쓰는 의미가 없다.
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: string = anyVar;

// unknown - 알 수 없는 타입
let unknownType:unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// any 타입과 차이점 - unknown타입은 다른 변수에 할당할 때 컴파일 에러남. 
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: string = unknownType;

let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType:never = null;
// let neverType:never = undefined;
// let neverType:never = 'test';

/**
 * 리스트 타입
*/
const koreanGirlGroup:string[] = ['abc','defg'];
const booleanList:boolean[] = [true, false];

/**
 * TS는 컴파일전에 사용되고 컴파일 시 js파일로 변환됨. (-> 자바스크립트엔진을 사용하기 떄문에 별도 오버헤드는 없다고함.) 
 * 하지만 any, unknown 등 TS에만 있는 타입을 남발하게 되면 런타임에서 문제가 생긴다
 * 터미널에 tsc 입력하면 해당 위치에 있는 ts파일을 컴파일해서 js파일이 생성됨
 */