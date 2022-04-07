// 아무 설정 없이 JS 쓰고 싶을때 : https://codesandbox.io || Chrome에서 F12 -> console

// INDEX
// 1. 자료형과 형변환
// 2. 연산자
// 3. 조건문
// 4. 함수
// 5. 함수표현식 & 화살표 함수
// 6. 콜백함수
// 7. 객체
// 8. 배열
// 9. 반복문
// 10. 배열 내장 함수



// 1. 자료형과 형변환
let age = 25;
console.log(age);// 25
age = 30;
console.log(age);// 30

// 변수명 java python이랑 유사 $_는 쓸 수 있음
// if(예약어), 6age, +age

// let var
// var 가변, let 중복 X

const nai = 25;
// const는 선언 이후 값을 바꿀 수 없다. let이랑 다름

let age1 = 25;// 정수
let tall = 175.9;// 실수
let Inf = Infinity;
let minusInf = -Infinity;
let nan = NaN;
console.log(age1 + tall);
console.log(age1 * tall);

let name = "박1";
let name2 = `박2 ${name}`;// `` <백틱
console.log(name2);

let isSwitchOff = false;
let a;// udefined
console.log(a);
let b = null;// null
console.log(b);

let numberA = 12;
let numberB = "12";
console.log(numberA * numberB);// 묵시적 형변환
console.log(numberA + numberB);// 보라색 숫자, 흰색 문자
console.log(numberA + parseInt(numberB));// 명시적 형변환



// 2. 연산자
// 대입연산자
let ad = 1;

// 사칙연산자
let bd = 2;
console.log(ad + bd);// * - /(몫) %(나머지)

// 연결연산자
//아까 했던 묵시적 형변환"1" + 2 = 12
//명시적 형변환 parseInt

// 복합연산자
let c = 5;
c = c + 10;// c += 10;
console.log(c);

// 증감연산자
let d = 10;
d++;// d--;(후위연산) --d;(전위연산)
console.log(d);

// 논리연산자
console.log(!true);// false
console.log(true && true);// true and true
console.log(true || false);// true or false;

console.log("---");
// 비교연산자
let compareA = 1 == "1";// (안에 있는 값만 비교) !=
console.log(compareA);
let compareB = 1 === "1";// (타입도 비교) !==
let compareC = 1;
console.log(compareB);
console.log(typeof compareC);
// >, >=

// 널병합연산자
let p;
p = p ?? 10; // null이나 undefined가 아닌 것을 선택
console.log(p);



// 3. 조건문
//조건문
let at = 3;

if (a >= 7) {
    console.log("7 이상입니다.");
} else if (at >= 5) {
    console.log("5 이상입니다.");
} else {
    console.log("5 미만입니다.");
}

let contry = "ko";
if (contry === "ko") {
    console.log("한국");
} else if (contry === "cn") {
    console.log("중국");
} else if (contry === "jp") {
    console.log("일본");
} else {
    console.log("미 분류");
}

// 스위치
let ctry = "ko";
switch (ctry) {
    case "koa":
        console.log("한국");
        break;
    case "cn":
        console.log("중국");
        break;
    default:
        console.log("미 분류");
        break;
}




// 4. 함수
let width1 = 10;
let height1 = 20;

let area1 = width1 * height1;
console.log(area1);

let width2 = 15;
let height2 = 25;

let area2 = width2 * height2;
console.log(area2);

function getArea(width, height) {
    // let width = 10;
    // let height = 20;
    let area = width * height;
    return area;
    console.log(area);
    // 함수 선언식, 함수 선언 방식의 함수 생성
}
getArea(100, 200);// 매개변수
console.log("areaa : ", areaa);
console.log("함수 실행 완료 ");



// 5. 함수표현식 & 화살표 함수
let helloA = function () {
    return "하이 ";
};// 함수 표현식

console.log(helloA);// helloA() {}
const hellotext = helloA();
console.log(hellotext);// 하이

function helloB() {
    return "하이2 ";
}// 함수 선언식

console.log(helloB);//helloB() {}

// 호이스팅
// console.log(ho());
// console.log(ho1());

let ho = function () {
    return "되냐?";
};// 함수 표현식

// console.log(ho());

function ho1() {
    return "이건 되냐?";
}

// 화살표 함수
let ho3 = () => {
    return "화살표 함수는 표현식 ";
};
console.log(ho3());

let ho4 = () => "리턴 하나면 중괄호 없애도 됨 ";
console.log(ho4());



// 6. 콜백함수
function checkMood(mood) {
    if (mood === "good ") {
        //기분 좋을 때 하는 동작
        sing();
    } else {
        // 기분 안 좋을 때 하는 동작
        cry();
    }
}
function cry() {
    console.log("ACTION :: CRY ");
}

function sing() {
    console.log("ACTION :: SING ");
}

function dance() {
    console.log("ACTION :: DANCE ");
}

checkMood("good ");

// 이걸로는 dance를 구현하지 못함
// dance를 출력하고 싶으면 if 혹은 else에서 dance로 바꿔줘야함

function checkMood1(mood, goodCallback, badCallback) {
    if (mood === "good ") {
        //기분 좋을 때 하는 동작
        goodCallback();
    } else {
        // 기분 안 좋을 때 하는 동작
        badCallback();
    }
}
function cry1() {
    console.log("ACTION :: CRY ");
}

function sing1() {
    console.log("ACTION :: SING ");
}

function dance1() {
    console.log("ACTION :: DANCE ");
}

checkMood1("good ", sing1, cry1);



// 7. 객체
let person2 = new Object(); // 생성자
let person1 = {
    // 객체 리터럴 방식 <자주 쓰임
    //key 중복 가능 but 추천X
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2",
    key2: true,
    key3: undefined, // 멤버
    key4: null, // 멤버
    key5: [1, 2], // 멤버
    key6: function () { }, // 메서드
    name: "박"
};
console.log(person1);
console.log(person1.key1);
console.log(person1.["name"]);
console.log(person1.key1123123);

console.log(getPropertyValue("name"));

function getPropertyValue(key) {
    return person1[key];
}

console.log("-------------------")

let person = {
    name: "김형조", // 멤버
    age: 28, // 멤버
    say: function () {
        console.log(`안녕 내 이름은 ${this.name}`);
        //console.log(`안녕 내 이름은 ${this["name"]}`);
        //console.log(`안녕 내 이름은 ${person.name}`);
    } // 메서드
}
// 깜빡하고 안 넣었어
person.location = "한국";
person["gender"] = "남성";
person.name = "형조"  // 수정됨
person.say(); // person["say"]();
console.log(person);

// delete person.age;
// delete person["gender"]; // delete보단 null로
// console.log(person);

// 이게 있나?
console.log(`name : ${"name" in person}`);



// 8. 배열
let arr1 = new Array();
let arr = [1, 2, 3, 4, 5]; // 배열 리터럴
//객체 처럼 숫자 문자 함수 등 다 넣어도 됨
console.log(arr[0]);
arr.push(6);
arr.push({ key: "value" }); // push 마지막에 추가 됨
console.log(arr);

// 배열의 길이
console.log(arr.length); // 자바랑 같음



// 9. 반복문
console.log("메롱");
console.log("메롱");
console.log("메롱");
console.log("메롱");

for (let i = 1; i <= 4; i++) {
    // 반복 수행할 명령
    console.log("메롱");
}

const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let person = {
    name: "박",
    age: 22,
    tall: 157
};

const personKeys = Object.keys(person);
// 객체 안의 키 값들을 배열로 반환
console.log(personKeys);
for (let i = 0; i < personKeys.length; i++) {
    console.log(personKeys[i]);
}
// 키 밸류
for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}
// 밸류
const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
    console.log(personValues[i]);
}



// 10. 배열 내장 함수
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// forEach
arr.forEach((aa) => console.log(aa)); // 1234
arr.forEach((aa) => console.log(aa * 2)); //2468
// arr.forEach(function (elm) {
//  console.log(elm);
//});

// map
// arr[]에 2배
const newArr = [];
arr.forEach(function (aaa) {
    newArr.push(aaa * 2);
}); //
console.log(newArr);

const newArr2 = arr.map((aaa) => {
    return aaa * 2;
});
console.log(newArr2);

// includes
// 요소 찾기
let number = 3;
arr.forEach((elm) => {
    if (elm === number) {
        console.log(true);
    }
});

console.log(arr.includes(number));

// indexOf
// 존재하면 몇 번째에 있는지?
console.log(arr.indexOf(number)); // 없으면 -1

//findIndex 콜백함수가 true를 반환하는 첫번째 요소
//find는 만족하는 요소 자체를 반환
const arr2 = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "red" }
];
console.log(
    arr2.findIndex((elm) => {
        // arr2.find((elm) ==> { ~~~~})
        return elm.color === "red";
    })
);

// 배열 필터링 : 특정한 조건을 만족하는 원소
// filter
const arr3 = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "red" },
    { num: 5, color: "blue" }
];
console.log(arr3.filter((elm) => elm.color === "blue"));

// 배열 잘라보자
// slice
console.log(arr.slice(0, 2)); // 0번부터 1번까지  end-1

// 배열 붙이기
// concat
const arr4 = [
    { num: 6, color: "green" },
    { num: 7, color: "white" }
];
console.log(arr3.concat(arr4));

// 배열 정렬
let chars = ["나", "다", "가"];
chars.sort();
console.log(chars);

let nums = [0, 1, 4, 3, 10, 30, 20];
nums.sort();
console.log(nums); // 사전 순이므로 0 먼저 1 10 20 3 이런식으로

// const compare = (a, b) => {
//  // 1. 같다
//  // 2. 크다
//  // 3. 작다
//  if (a >b) {
//     // 크다
//     return 1;
//  }

//  if (a <b) {
//     // 작다
//     return -1;
//  }
//  // 같다
//  return 0;
//};
// nums.sort(compare);
// console.log(nums);

// 합치자
// join
const cinn = ["박", "이는", "이쁘다", "인정"];
console.log(cinn);
console.log(cinn.join(" "));