'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractWidget = require('./AbstractWidget');

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.clonedeep');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share() {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
  }

  _createClass(Share, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _lodash2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('url') || changed('options');
    }
  }, {
    key: 'ready',
    value: function ready(tw, element, done) {
      var _props = this.props,
          url = _props.url,
          options = _props.options,
          onLoad = _props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createShareButton(url, element, (0, _lodash4.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready.bind(this) });
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  url: _react2.default.PropTypes.string.isRequired,
  options: _react2.default.PropTypes.object,
  onLoad: _react2.default.PropTypes.func
};
Share.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Share;