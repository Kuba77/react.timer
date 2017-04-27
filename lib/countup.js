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

var _convertTime = require('./convert-time');

var _convertTime2 = _interopRequireDefault(_convertTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CountUp: {
    displayName: 'CountUp'
  }
};

var _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/countup.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/countup.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformHmrLibIndexJs2(_UsersSPQDocumentsProjectsReactTimerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CountUp = _wrapComponent('CountUp')(function (_Component) {
  _inherits(CountUp, _Component);

  function CountUp(props) {
    _classCallCheck(this, CountUp);

    var _this = _possibleConstructorReturn(this, (CountUp.__proto__ || Object.getPrototypeOf(CountUp)).call(this, props));

    _this.startTime = Date.now() - props.startTime * 1000;
    _this.state = { time: props.startTime };
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  _createClass(CountUp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({ time: Date.now() - this.startTime });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'span',
        null,
        (0, _convertTime2.default)(this.state.time)
      );
    }
  }]);

  return CountUp;
}(_react2.Component));

CountUp.propTypes = {
  startTime: _react2.PropTypes.number
};
CountUp.defaultProps = {
  startTime: 0
};
exports.default = CountUp;