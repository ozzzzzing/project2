//✨✨✨✨✨DATABASE✨✨✨✨✨

const locationMap = document.getElementById("location-map");
const locationBtn = document.querySelectorAll(".course");
//✨✨✨✨✨지역명✨✨✨✨✨

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

//✨✨✨✨✨위도 경도 위치✨✨✨✨✨

const DONGGU = [36.017498518477815, 128.69508579978933]; // 팔공산
const SEOGU = [35.87407722642274, 128.57810313026985]; // 달성공원
const NAMGU = [35.84741741182456, 128.55778279793245]; // 두류공원
const BUKGU = [35.90385906209427, 128.55829729752273]; // 하중도
const JUNGGU = [35.869167082825506, 128.5872243983395]; // 근대골목
const SUSEONGGU = [35.82857444125946, 128.61780789973]; // 수성못
const DALSEOGU = [35.79913762331876, 128.52369822676684]; // 수목원
const DALSEONGGUN = [35.812515159784255, 128.48254896157522]; // 화원유원지

// 전역변수
let map;
let marker;
let userLatitude; // 위도
let userLongitude; // 경도
let clickPosition = "user";
let markers = [];
//✨✨✨✨✨로딩함수✨✨✨✨✨

loading();
changeBtnCss(8);

// navigator.geolocation : 브라우저에서 기본적으로 제공하는 함수들 - 장치의 위치를 표시함 (mdn 사이트에서 찾아보기)
// navigator.geolocation 를 인식할 수 있으면 다음을 실행시켜라
// 참고) ios 는 보안이 철저해서 위치정보 받기 힘듦
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos); // 콘솔창에 경도 위도 표시됨
    // 실시간 변하는 값을 지역변수에 넣어 줌
    userLatitude = pos.coords.latitude;
    // console.log(userLatitude); // 2. 변수에 값이 들어 옴 - 위도 표시 됨
    userLongitude = pos.coords.longitude;

    drawMap(userLatitude, userLongitude);
    staticMarkder();
    // 나의 마커 ---- 계속 변동 되기 때문에 따로 넣음
    addMarker(new kakao.maps.LatLng(userLatitude, userLongitude));
    loading();
  });
  // 실시간 위치 체크 (내 위치 지우고 다시 생성 작업을 반복)
  navigator.geolocation.watchPosition((pos) => {
    // if (경도 - 오차범위 < 경도 < 경도 + 오차범위) {}
    delMarkers();
    // 지운 후 위도 경도 새로 받음
    userLatitude = pos.coords.latitude;
    userLongitude = pos.coords.longitude;
    addMarker(new kakao.maps.LatLng(userLatitude, userLongitude));
    if (clickPosition === "user") {
      // 중심 좌표를 지정한 좌표 또는 영역으로 부드럽게 이동
      panTo(userLatitude, userLongitude);
    }
  });
}

function loading() {
  const loadingWrap = document.querySelector(".loading-wrap");
  const body = document.querySelector("body");

  body.classList.toggle("touch-none");
  loadingWrap.classList.toggle("hidden"); // 클래스명이 hidden, css참고
}

function addMarker(position) {
  marker = new kakao.maps.Marker({
    position: position,
  });
  marker.setMap(map);
  markers.push(marker);
}
// 내 위치 지우고 초기화
function delMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// 중앙을 맞춰서 뿌리기
function drawMap(latitude, longitude) {
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 4,
  };

  map = new kakao.maps.Map(locationMap, options);

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  map.setZoomable(true); // 확대하고 싶으면 true
  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
}
// 지정된 장소
// 마커 이미지와 사이즈
const imageSrc = "/client/file/complete.png";
// "/client/file/complete.png";

const imageSize = new kakao.maps.Size(50, 60);

const imageCat = "/client/file/cat_marker.png";
const imagededgehog = "/client/file/dedgehog_marker.png";
const imagedog = "/client/file/dog_marker.png";
const imagedragon = "/client/file/dragon_marker.png";
const imagemonkey = "/client/file/monkey_marker.png";
const imagepig = "/client/file/pig_marker.png";
const imagerabbit = "/client/file/rabbit_marker.png";
const imagesheep = "/client/file/sheep_marker.png";
const imageDone = "/client/file/ComPleted.png";

// 내 위치
function drawMyPosition(latitude, longitude) {
  const latlng = new kakao.maps.LatLng(latitude, longitude);

  marker = new kakao.maps.Marker({
    map: map,
    position: latlng,
    title: "내위치",
  });
  marker.setMap(map);
}

function staticMarkder() {
  const positions = [
    {
      title: "동구",
      word: "DONGGU",
      latlng: new kakao.maps.LatLng(DONGGU[0], DONGGU[1]),
      marker: new kakao.maps.MarkerImage(imagepig, imageSize),
    },
    {
      title: "서구",
      word: "SEOGU",
      latlng: new kakao.maps.LatLng(SEOGU[0], SEOGU[1]),
      marker: new kakao.maps.MarkerImage(imagemonkey, imageSize),
    },
    {
      title: "남구",
      word: "NAMGU",
      latlng: new kakao.maps.LatLng(NAMGU[0], NAMGU[1]),
      marker: new kakao.maps.MarkerImage(imagededgehog, imageSize),
    },
    {
      title: "북구",
      word: "BUKGU",
      latlng: new kakao.maps.LatLng(BUKGU[0], BUKGU[1]),
      marker: new kakao.maps.MarkerImage(imagerabbit, imageSize),
    },
    {
      title: "중구",
      word: "JUNGGU",
      latlng: new kakao.maps.LatLng(JUNGGU[0], JUNGGU[1]),
      marker: new kakao.maps.MarkerImage(imagesheep, imageSize),
    },
    {
      title: "수성구",
      word: "SUSEONGGU",
      latlng: new kakao.maps.LatLng(SUSEONGGU[0], SUSEONGGU[1]),
      marker: new kakao.maps.MarkerImage(imagedragon, imageSize),
    },
    {
      title: "달서구",
      word: "DALSEOGU",
      latlng: new kakao.maps.LatLng(DALSEOGU[0], DALSEOGU[1]),
      marker: new kakao.maps.MarkerImage(imageCat, imageSize),
    },
    {
      title: "달성군",
      word: "DALSEONGGUN",
      latlng: new kakao.maps.LatLng(DALSEONGGUN[0], DALSEONGGUN[1]),
      marker: new kakao.maps.MarkerImage(imagedog, imageSize),
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    const dbArray = dbValue.split(",");
    Done = new kakao.maps.MarkerImage(imageDone, imageSize);
    marker = new kakao.maps.Marker({
      // 마커의 위치, 이미지를 이렇게 정해서 지도에 넣겠다~
      map: map,
      position: positions[i].latlng,
      title: positions[i].title,
      image:
        dbArray.includes(positions[i].word) == true
          ? Done
          : positions[i].marker,
    });

    // marker.normalImage = normalImage;
    marker.setMap(map); // 마커를 지도에 넣음
  }
}
// const panTo = (latitude, longitude) => {
//   const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
//   map.panTo(moveLatLon);
// };
// ㄴ 아래와 같은 함수임

function chekcingDone() {
  const dbArray = dbValue.split(",");
  for (let i = 0; i < dbArray.length; i++) {
    // 다음 글자에 해당하면 지우기(내가해냄 도장 찍힘)
    if (dbArray[i] === "DONGGU") {
      // 큐알코드 이름 임의로 정해도 됨
      const dongGuMark = document.querySelector(".dong-gu-stamp");
      dongGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "SEOGU") {
      const seoGuMark = document.querySelector(".seo-gu-stamp");
      seoGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "NAMGU") {
      const namGuMark = document.querySelector(".nam-gu-stamp");
      namGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "BUKGU") {
      const bukGuMark = document.querySelector(".buk-gu-stamp");
      bukGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "JUNGGU") {
      const jungGuMark = document.querySelector(".jung-gu-stamp");
      jungGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "SUSEONGGU") {
      const suseongGuMark = document.querySelector(".suseong-gu-stamp");
      suseongGuMark.classList.remove("hidden");
    } else if (dbArray[i] === "DALSEOGU") {
      const dalseoGumark = document.querySelector(".dalseo-gu-stamp");
      dalseoGumark.classList.remove("hidden");
    } else if (dbArray[i] === "DALSEONGGUN") {
      const dalseongGunmark = document.querySelector(".dalseong-gun-stamp");
      dalseongGunmark.classList.remove("hidden");
    }
  }
}
chekcingDone();

function panTo(latitude, longitude) {
  const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
  map.panTo(moveLatLon);
}

function changeBtnCss(target) {
  for (let i = 0; i < locationBtn.length; i++) {
    if (target === i) {
      locationBtn[i].classList.add("pick-on"); // 클릭한 것과 같으면 pick-on css 실행
    } else {
      locationBtn[i].classList.remove("pick-on");
    }
  }
}

function changeBtnCss(target) {
  for (let i = 0; i < locationBtn.length; i++) {
    if (target === i) {
      locationBtn[i].classList.add("pick-on");
    } else {
      locationBtn[i].classList.remove("pick-on");
    }
  }
}

const allmap = document.querySelector("#allmap");

dongGu.addEventListener("click", function () {
  changeBtnCss(0);
  clickPosition = "other";
  panTo(DONGGU[0], DONGGU[1]);
  allmap.style.display = "none";
});
seoGu.addEventListener("click", function () {
  changeBtnCss(1);
  clickPosition = "other";
  panTo(SEOGU[0], SEOGU[1]);
  allmap.style.display = "none";
});
namGu.addEventListener("click", function () {
  changeBtnCss(2);
  clickPosition = "other";
  panTo(NAMGU[0], NAMGU[1]);
  allmap.style.display = "none";
});
bukGu.addEventListener("click", function () {
  changeBtnCss(3);
  clickPosition = "other";
  panTo(BUKGU[0], BUKGU[1]);
  allmap.style.display = "none";
});
jungGu.addEventListener("click", function () {
  changeBtnCss(4);
  clickPosition = "other";
  panTo(JUNGGU[0], JUNGGU[1]);
  allmap.style.display = "none";
});
suseongGu.addEventListener("click", function () {
  changeBtnCss(5);
  clickPosition = "other";
  panTo(SUSEONGGU[0], SUSEONGGU[1]);
  allmap.style.display = "none";
});
dalseoGu.addEventListener("click", function () {
  changeBtnCss(6);
  clickPosition = "other";
  panTo(DALSEOGU[0], DALSEOGU[1]);
  allmap.style.display = "none";
});
dalseongGun.addEventListener("click", function () {
  changeBtnCss(7);
  clickPosition = "other";
  panTo(DALSEONGGUN[0], DALSEONGGUN[1]);
  allmap.style.display = "none";
});
myPosition.addEventListener("click", function () {
  changeBtnCss(8);
  clickPosition = "user"; // 내위치
  panTo(userLatitude, userLongitude);
  allmap.style.display = "none";
});
