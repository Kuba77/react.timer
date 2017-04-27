'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/SPQ/Documents/Projects/react.timer/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/SPQ/Documents/Projects/react.timer/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/SPQ/Documents/Projects/react.timer/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CountDown: {
    displayName: 'CountDown'
  }
};

var _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/countdown.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/countdown.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformHmrLibIndexJs2(_UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CountDown = _wrapComponent('CountDown')(function (_Component) {
  _inherits(CountDown, _Component);

  function CountDown(props) {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

    _this.state = { time: props.startTime * 10 };
    _this.tick = _this.tick.bind(_this);
    _this.stopTime = Date.now() + props.startTime * 1000;
    return _this;
  }

  _createClass(CountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.time = setInterval(this.tick, 100);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.time);
    }
  }, {
    key: 'tick',
    value: function tick() {
      var now = Date.now();
      if (this.stopTime - now <= 0) {
        this.setState({ time: 0 });
        clearInterval(this.time);
      } else this.setState({ time: Math.round((this.stopTime - now) / 100) });
    }
  }, {
    key: 'render',
    value: function render() {
      var time = this.state.time / 10;
      var seconds = Math.floor(time);
      if (seconds > 9) return _react3.default.createElement(
        'span',
        null,
        seconds
      );
      return _react3.default.createElement(
        'span',
        { style: { color: 'red' } },
        time.toFixed(1)
      );
    }
  }]);

  return CountDown;
}(_react2.Component));

CountDown.propTypes = {
  startTime: _react2.PropTypes.number.isRequired
};
exports.default = CountDown;