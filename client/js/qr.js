// 경고창
// function bottomMsg(msg, type) {
//   const Toast = Swal.mixin({
//     toast: true,
//     position: "center",
//     showConfirmButton: false,
//     timer: 2000, // 인식 시간 2초
//   });
//   Toast.fire({ title: msg, icon: type });
// }

function doFetch(type) {
  fetch("/qr", {
    // http://localhost:9077/qr
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: type,
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // if (data.success) {
      //   bottomMsg(type, "success"); // 성공
      // } else {
      //   bottomMsg("인증실패", "error"); // 실패
      // }
      setTimeout(startScan, 3000); // 찍고 난 다음 3초 후 다시 스캔 시작(함수 실행)
    });
}

// 스캔 시작
function startScan() {
  let video = document.createElement("video");
  let canvasElement = document.getElementById("canvas");
  let canvas = canvasElement.getContext("2d"); // 2d, 3d 종류가 있음

  // 인식 했을 때 생기는 줄
  function drawLine(begin, end, color) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }
  // 카메라 사용시
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    // .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.setAttribute("playsinline", true);
      video.play();
      requestAnimationFrame(tick);
    });

  function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      // 읽어들이는 비디오 화면의 크기
      //canvasElement.height = video.videoHeight;
      //canvasElement.width = video.videoWidth;
      // 카메라 사이즈 조절 가능
      canvasElement.height = 640;
      canvasElement.width = 600;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      let imageData = canvas.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      // 큐알 라이브러리 가져와서 씀
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      // 잠시 기다려 주세요~ > 큐알 인식이 끝나면 히든처리
      const waitText = document.querySelector(".wait-text");
      waitText.classList.add("hidden");

      // QR코드 인식에 성공한 경우
      if (code) {
        // 인식한 QR코드의 영역을 감싸는 사용자에게 보여지는 테두리 생성 (테두리 총 4개)
        drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          "#FF0000"
        );
        drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          "#FF0000"
        );
        drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          "#FF0000"
        );
        drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          "#FF0000"
        );
        // QR코드 메시지 출력
        console.log(code.data); // 큐알 코드도 문자열이다
        // Fetch : 새로고침 없이 서버에서 데이터를 추고 받음
        setTimeout(function () {
          // if (window.location == "https://aniwhere.herokuapp.com/qr") {
          window.location.href = "/pop_01cat";
          // }
        }, 1000);
        // window.location.href = "/pop_01cat";
        return doFetch(code.data);
      }
    }
    requestAnimationFrame(tick);
  }
}

// 스캔 시작 함수 호출
startScan();
