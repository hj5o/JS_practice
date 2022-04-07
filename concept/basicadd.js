// INDEX
// 1. Truthy & Falsy
// 2. 삼항연산자
// 3. 조건문++
// 4. 비 구조화 할당
// 5. Spread 연산자


// 1. Truthy & Falsy
let a = "";

if (a) {
    console.log("TRUE ");// [], {}, Infinity
} else {
    console.log("FALSE ");// "", null, undefined, 0, NaN
}



// 2. 삼항연산자
// 양수 판별
let a = 3;
if (a >= 0) {
    console.log("양수 ");
} else {
    console.log("음수 ");
}

a >= 0 ? console.log("양수 ") : console.log("음수 ");

let b = [];
if (b.length === 0) {
    console.log("빈 배열 ");
} else {
    console.log("배열 ");
}

b.length === 0 ? console.log("빈 배열 ") : console.log("배열 ");
// b.length === 0 ? "빈 배열" : "배열";
// const arrayStatus = b.length === 0 ? "빈 배열" : "배열";
// console.log(arrayStatus);

let g;
const result = g ? true : false;
console.log(result);// false, // let g = []; // true

// 학점 계산 프로그램
// 90점 이상 A+, 50점 이상 B+, 50점 미만 F
let score = 0;

// score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");



// 3. 조건문++
function isKoreaFood(food) {
    // if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    if (["불고기 ", "비빔밥 ", "떡볶이 "].includes(food)) {
        return true;
    }
    return false;
}

const food1 = isKoreaFood("불고기 ");
const food2 = isKoreaFood("파스타 ");
console.log(food1);
console.log(food2);

// 한식 중식 양식인지 받고 그들의 대표메뉴를 리턴
const getMeal = (mealType) => {
    if (mealType === "한식 ") return "불고기 ";
    if (mealType === "양식 ") return "파스타 ";
    if (mealType === "중식 ") return "멘보샤 ";
    if (mealType === "일식 ") return "초밥 ";
    return "굶기 ";
};
console.log(getMeal("한식 "));
console.log(getMeal("중식 "));
console.log(getMeal());

const meal = {
    한식: "불고기 ",
    중식: "짜장면 ",
    일식: "초밥 ",
    양식: "스테이크 ",
    인도식: "카레 "
};

const getFood = (foodType) => {
    return meal[foodType] || "굶기 ";
};
console.log(getFood("한식 "));
console.log(getFood());



// 4. 비 구조화 할당
let arr = ["one ", "two ", "three ", "four "];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three] = arr;

console.log(one, two, three);

// swap
let a, c = 10;
let b, d = 20;
let temp = 0;
a = b;
b = temp;
console.log(a, b);

[c, d] = [d, c];
console.log(c, d);



// 5. Spread 연산자
const cookie = {
    base: "cookie ",
    madeIn: "korea "
};

const chocochipCookie = {
    // base: "cookie",
    // madeIn: "korea",
    ...cookie,
    toping: "chocochip "
};

const blueberryCookie = {
    // base: "cookie",
    // madeIn: "korea",
    ...cookie,
    toping: "blueberry "
};

const strawberryCookie = {
    // base: "cookie",
    // madeIn: "korea",
    ...cookie,
    toping: "strawberry "
};

console.log(chocochipCookie);

// 배열
const noTopingCookies = ["촉촉한 쿠키 ", "안 촉촉한 쿠키 "];
const topingCookies = ["바나나 쿠키 ", "딸기 쿠키 ", "초코칩 쿠키 "];

const allCookies = [...noTopingCookies, "시녕쿠키 ", ...topingCookies];
console.log(allCookies);