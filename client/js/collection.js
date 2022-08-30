//숫자 카운트 로직

const dbNum = document.getElementById("db-value").value; //db의 값을 가져옴
let dbNumLenth = dbNum.split(",");
console.log(`dbNum : ${dbNum}`); ///통짜 배열 -> 각 글자마다 나눠짐 ex -> {love} -> 4
console.log(`dbNum1 : ${dbNumLenth}`); //각개의 '값'으로 분리된 애들
console.log(`dbNum2 : ${dbNumLenth.length}`); ///배열에 담긴 값들을 세어준다

const AnimalCount = document.getElementById("AnimalCount");
const btnOpenComplete = document.querySelector("#success_btn");

// const Success = document.getElementById("success_btn");
// const SuccessLink = (document.getElementById("success_btn").href = "/complete");
let success;
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
      console.log(`카운트의 갯수는 ${Count.length}`);
    } else {
      console.log(`${x}를 Count에 넣지않았습니다🎇`);
    }
  });
  success = Count.length;
  AnimalCount.innerText = Count.length;
  // 출력되는 화면을 보았을 때 성공적으로 출력되었음을 알 수 있다.

  if (success == 8) {
    btnOpenComplete.classList.replace("off", "on");

    btnOpenComplete.addEventListener("click", (e) => {
      modalComplete.classList.toggle("show");

      if (modalComplete.classList.contains("show")) {
        body.style.overflow = "hidden";
      }
    });
    modalComplete.addEventListener("click", (event) => {
      if (event.target === modalComplete) {
        modalComplete.classList.toggle("show");

        if (!modalComplete.classList.contains("show")) {
          body.style.overflow = "auto";
        }
      }
    });
  }
};

////////////////////////////////////////////////////////////////////
const locationMap = document.getElementById("location-map");
const locationBtn = document.querySelectorAll(".animal");

const dongGu = document.getElementById("dong-gu");
const seoGu = document.getElementById("seo-gu");
const namGu = document.getElementById("nam-gu");
const bukGu = document.getElementById("buk-gu");
const jungGu = document.getElementById("jung-gu");
const suseongGu = document.getElementById("suseong-gu");
const dalseoGu = document.getElementById("dalseo-gu");
const dalseongGun = document.getElementById("dalseong-gun");

const myPosition = document.getElementById("my-position");
const dbValue = document.getElementById("db-value").value;

function chekcingDone() {
  const dbArray = dbValue.split(",");
  for (let i = 0; i < dbArray.length; i++) {
    // 다음 글자에 해당하면 지우기(내가해냄 도장 찍힘)
    if (dbArray[i] === "DONGGU") {
      // 큐알코드 이름 임의로 정해도 됨
      const dongGuMark = document.querySelector(".dong-gu-mark");
      dongGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "SEOGU") {
      const seoGuMark = document.querySelector(".seo-gu-mark");
      seoGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "NAMGU") {
      const namGuMark = document.querySelector(".nam-gu-mark");
      namGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "BUKGU") {
      const bukGuMark = document.querySelector(".buk-gu-mark");
      bukGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "JUNGGU") {
      const jungGuMark = document.querySelector(".jung-gu-mark");
      jungGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "SUSEONGGU") {
      const suseongGuMark = document.querySelector(".suseong-gu-mark");
      suseongGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "DALSEOGU") {
      const dalseoGumark = document.querySelector(".dalseo-gu-mark");
      dalseoGumark.classList.remove("hidden");
    } else if (dbArray[i] === "DALSEONGGUN") {
      const dalseongGunmark = document.querySelector(".dalseong-gun-mark");
      dalseongGunmark.classList.remove("hidden");
    }
  }
}
chekcingDone();

// 모달창
const body = document.querySelector("body");

const modalDragon = document.querySelector(".modal_dragon");
const modalMonkey = document.querySelector(".modal_monkey");
const modalSheep = document.querySelector(".modal_sheep");
const modalDog = document.querySelector(".modal_dog");
const modalPig = document.querySelector(".modal_pig");
const modalRabbit = document.querySelector(".modal_rabbit");
const modalCat = document.querySelector(".modal_cat");
const modalHedgehog = document.querySelector(".modal_hedgehog");

const btnOpenDragon = document.querySelector("#modal_dragon");
const btnOpenMonkey = document.querySelector("#modal_monkey");
const btnOpenSheep = document.querySelector("#modal_sheep");
const btnOpenDog = document.querySelector("#modal_dog");
const btnOpenPig = document.querySelector("#modal_pig");
const btnOpenRabbit = document.querySelector("#modal_rabbit");
const btnOpenCat = document.querySelector("#modal_cat");
const btnOpenHedgehog = document.querySelector("#modal_hedgehog");

const closeDragon = document.querySelector(".close_dragon");
const closeMonkey = document.querySelector(".close_monkey");
const closeSheep = document.querySelector(".close_sheep");
const closeDog = document.querySelector(".close_dog");
const closePig = document.querySelector(".close_pig");
const closeRabbit = document.querySelector(".close_rabbit");
const closeCat = document.querySelector(".close_cat");
const closeHedgehog = document.querySelector(".close_hedgehog");

const modalComplete = document.querySelector(".modal_complete");

// 완성 모달

// 드래곤 모달
btnOpenDragon.addEventListener("click", (e) => {
  modalDragon.classList.toggle("show");

  if (modalDragon.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalDragon.addEventListener("click", (event) => {
  if (event.target === modalDragon) {
    modalDragon.classList.toggle("show");

    if (!modalDragon.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeDragon.addEventListener("click", function () {
  modalDragon.classList.toggle("show");
});

// 원숭이 모달
btnOpenMonkey.addEventListener("click", (e) => {
  modalMonkey.classList.toggle("show");

  if (modalMonkey.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalMonkey.addEventListener("click", (event) => {
  if (event.target === modalMonkey) {
    modalMonkey.classList.toggle("show");

    if (!modalMonkey.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeMonkey.addEventListener("click", function () {
  modalMonkey.classList.toggle("show");
});

// 양 모달
btnOpenSheep.addEventListener("click", (e) => {
  modalSheep.classList.toggle("show");

  if (modalSheep.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalSheep.addEventListener("click", (event) => {
  if (event.target === modalSheep) {
    modalSheep.classList.toggle("show");

    if (!modalSheep.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeSheep.addEventListener("click", function () {
  modalSheep.classList.toggle("show");
});

// 개 모달
btnOpenDog.addEventListener("click", (e) => {
  modalDog.classList.toggle("show");

  if (modalDog.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalDog.addEventListener("click", (event) => {
  if (event.target === modalDog) {
    modalDog.classList.toggle("show");

    if (!modalDog.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeDog.addEventListener("click", function () {
  modalDog.classList.toggle("show");
});

// 돼지 모달
btnOpenPig.addEventListener("click", (e) => {
  modalPig.classList.toggle("show");

  if (modalPig.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalPig.addEventListener("click", (event) => {
  if (event.target === modalPig) {
    modalPig.classList.toggle("show");

    if (!modalPig.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closePig.addEventListener("click", function () {
  modalPig.classList.toggle("show");
});

// 토끼 모달
btnOpenRabbit.addEventListener("click", (e) => {
  modalRabbit.classList.toggle("show");

  if (modalRabbit.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalRabbit.addEventListener("click", (event) => {
  if (event.target === modalRabbit) {
    modalRabbit.classList.toggle("show");

    if (!modalRabbit.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeRabbit.addEventListener("click", function () {
  modalRabbit.classList.toggle("show");
});

// 고양이 모달
btnOpenCat.addEventListener("click", (e) => {
  modalCat.classList.toggle("show");

  if (modalCat.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalCat.addEventListener("click", (event) => {
  if (event.target === modalCat) {
    modalCat.classList.toggle("show");

    if (!modalCat.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeCat.addEventListener("click", function () {
  modalCat.classList.toggle("show");
});

// 고슴도치 모달
btnOpenHedgehog.addEventListener("click", (e) => {
  modalHedgehog.classList.toggle("show");

  if (modalHedgehog.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modalHedgehog.addEventListener("click", (event) => {
  if (event.target === modalHedgehog) {
    modalHedgehog.classList.toggle("show");

    if (!modalHedgehog.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
closeHedgehog.addEventListener("click", function () {
  modalHedgehog.classList.toggle("show");
});
