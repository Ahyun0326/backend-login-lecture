"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

//app을 router로 변경
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;    //외부에서 사용할 수 있도록 모듈화