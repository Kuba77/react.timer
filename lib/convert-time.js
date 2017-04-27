"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mSec) {
  var seconds = Math.round(mSec / 1000);
  var minutes = Math.floor(seconds / 60);
  var sec = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : "" + minutes;
  sec = sec < 10 ? "0" + sec : "" + sec;
  return minutes + ":" + sec;
};