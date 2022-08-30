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

let db = ["DONGGU", "SEOGU", "NAMGU", "BUKGU", "JUNGGU", "SUSEONGGU", "DALSEONGGUN",  "DALSEOGU"];
// "DONGGU", "SEOGU", "NAMGU", "BUKGU", "JUNGGU", "SUSEONGGU", "DALSEOGU", "DALSEONGGUN"

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
  res.render("home", { db: db });
});
server.get("/aniwhere", function (req, res) {
  res.render("aniwhere", { db: db });
});
server.get("/certification", function (req, res) {
  res.render("certification");
});
server.get("/collection", function (req, res) {
  res.render("collection", { db: db });
});
server.get("/howtouse", function (req, res) {
  res.render("howtouse", { db: db });
});
server.get("/qr", function (req, res) {
  res.render("qr");
});

server.post("/qr", function (req, res) {
  // console.log(db);
  type = req.body.type;
  res.send({ success: true });
});

server.get("/notice", function (req, res) {
  res.render("notice");
});
server.get("/complete", function (req, res) {
  res.render("complete");
});
server.get("/pop_01cat", function (req, res) {
  res.render("pop_01cat", { db: db });
});
server.get("/login", function (req, res) {
  res.render("login");
});
server.get("/donation", function (req, res) {
  res.render("donation", { db: db });
});
server.get("/donation_done", function (req, res) {
  res.render("donation_done", { db: db });
});
server.get("/gift", function (req, res) {
  res.render("gift", { db: db });
});
server.get("/gift_done", function (req, res) {
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
// server.listen(process.env.PORT || 3000, function () {
//   console.log("히로쿠 서버 오픈✨");
// });

// 💎💎💎💎테스트용 로컬 서버💎💎💎💎
server.listen(PORT, function () {
  console.log("로컬서버오픈: http://localhost:" + PORT);
});
