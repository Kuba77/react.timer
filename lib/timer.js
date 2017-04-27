'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _countdown = require('./countdown');

var _countdown2 = _interopRequireDefault(_countdown);

var _countup = require('./countup');

var _countup2 = _interopRequireDefault(_countup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Timer(_ref) {
  var countDown = _ref.countDown,
      startTime = _ref.startTime;

  if (countDown && startTime > 0) return _react2.default.createElement(_countdown2.default, { startTime: startTime });
  if (!countDown) return _react2.default.createElement(_countup2.default, { startTime: startTime });
  return _react2.default.createElement('span', null);
}
Timer.propTypes = {
  countDown: _react.PropTypes.bool,
  startTime: _react.PropTypes.number
};
exports.default = Timer;