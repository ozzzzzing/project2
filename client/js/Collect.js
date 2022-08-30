const dbNum = document.getElementById("db-value").value; //db의 값을 가져옴
let dbNumLenth = dbNum.split(",");
console.log(`dbNum : ${dbNum}`); ///통짜 배열 -> 각 글자마다 나눠짐 ex -> {love} -> 4
console.log(`dbNum1 : ${dbNumLenth}`); //각개의 '값'으로 분리된 애들
console.log(`dbNum2 : ${dbNumLenth.length}`); ///배열에 담긴 값들을 세어준다

const AnimalCount = document.getElementById("AnimalCount");
const Success = document.getElementById("Success");
// const SuccessLink = (document.getElementById("Success").href = "(변경할 href)");

let Count = [];

const CollectArry = [
  "DONGGU",
  "SEOGU",
  "NAMGU",
  "BUKGU",
  "JUNGGU",
  "SUSEONGGU",
  "DALSEOGU",
  "DALSEONGGUN",
];

console.log(`CollectArry: ${CollectArry.length}`);

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }

  CollectArry.forEach((x) => {
    console.log(`이것은 dbNumLenth에 담긴 값 ${x} 입니다.`);
    console.log(`${x}를 이용해 값을 비교하겠습니다.`);
    if (dbNumLenth.includes(x)) {
      Count.push(x);
      console.log(`${x}를 Count에 넣었습니다🎈`);
      console.log(`카운트의 갯수는 ${Count.lenth}`);
    } else {
      console.log(`${x}를 Count에 넣지않았습니다🎇`);
    }
  });

  AnimalCount.innerText = Count.length;
  // 출력되는 화면을 보았을 때 성공적으로 출력되었음을 알 수 있다.
  //만세!
};
