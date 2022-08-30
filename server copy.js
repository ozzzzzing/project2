//✨✨✨✨✨서버 세팅✨✨✨✨✨

const express = require("express");
const server = express();
const PORT = 9077;
const path = require("path");
const Swal = require("sweetalert2");

server.set("view engine", "ejs");
server.set("views", process.cwd() + "/client/html");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/client", express.static("client"));

//✨✨✨✨✨MongoDB 연결✨✨✨✨✨
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = `mongodb+srv://1234:1234@cluster0.n6n95.mongodb.net/Anywhere?retryWrites=true&w=majority`;

var db;
var items;
let DBs = [];

function Find() {
  MongoClient.connect(url, function (err, client) {
    if (err) {
      // 에러일시 다음같은 콘솔로그가 뜹니다.
      console.error("MongoDB 연결 실패😂", err);
      return;
    }
    // Aywhere 데이터 베이스를 사용합니다.

    db = client.db("Anywhere"); //DB이름

    collection = db.collection("Location"); //콜렉션
    console.log(`Location ${collection}`);
    console.log(`db : ${db}`);

    collection.find().toArray((err, items) => {
      items = items;
      console.log(`db에 저장된 값들은? ${items[0].word}`);
      db = items[0].word;
    }); //콜렉션에 있는 아이템 조회
  });
}
Find();

//✨✨✨✨✨서버 설정✨✨✨✨✨
server.set("view engine", "ejs");
server.set("views", process.cwd() + "/client/html");

//✨✨✨✨✨미들웨어✨✨✨✨✨
server.use(express.json()); // ajax
server.use(express.urlencoded({ extended: true })); // 사용가능ID, 적절한 비밀번호 등을 즉각확인 가능해서 유용히 쓰임
server.use("/client", express.static("client")); // 미들웨어설정

//✨✨✨✨✨서버 ✨✨✨✨✨
server.get("/", function (req, res) {
  res.render("splash");
});
server.get("/home", function (req, res) {
  Find();
  res.render("home", { db: db });
});
server.get("/aniwhere", function (req, res) {
  Find();
  res.render("aniwhere", { db: db });
});
server.get("/certification", function (req, res) {
  res.render("certification");
});
server.get("/collection", function (req, res) {
  Find();
  res.render("collection", { db: db });
});
server.get("/howtouse", function (req, res) {
  Find();
  res.render("howtouse", { db: db });
});
server.get("/qr", function (req, res) {
  res.render("qr");
});

server.post("/qr", function (req, res) {
  // console.log(db);
  type = req.body.type;
  console.log(type);
  console.log(DBs);
  collection.updateOne(
    { collectWord: "ON" },
    { $push: { word: type } },
    (err, result) => {
      console.log("문서 업데이트 완료❤");
    }
  );
  res.send({ success: true });
});

server.get("/notice", function (req, res) {
  res.render("notice");
});
server.get("/complete", function (req, res) {
  res.render("complete");
});
server.get("/pop_01cat", function (req, res) {
  Find();
  res.render("pop_01cat", { db: db });
});
server.get("/login", function (req, res) {
  res.render("login");
});
server.get("/donation", function (req, res) {
  Find();
  res.render("donation", { db: db });
});
server.get("/donation_done", function (req, res) {
  Find();
  res.render("donation_done", { db: db });
});
server.get("/gift", function (req, res) {
  res.render("gift", { db: db });
});
server.get("/gift_done", function (req, res) {
  Find();
  res.render("gift_done", { db: db });
});
server.get("/myinfo", function (req, res) {
  res.render("myinfo");
});
server.get("/sign_up", function (req, res) {
  res.render("sign_up");
});
server.get("/test", function (req, res) {
  res.render("test");
});

// 💎💎💎💎히로쿠 서버💎💎💎💎
server.listen(process.env.PORT || 3000, function () {
  console.log("히로쿠 서버 오픈✨");
});

// 💎💎💎💎테스트용 로컬 서버💎💎💎💎
// server.listen(PORT, function () {
//   console.log("로컬서버오픈: http://localhost:" + PORT);
// });
