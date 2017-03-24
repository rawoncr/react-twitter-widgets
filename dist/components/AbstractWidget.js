'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWidget = function (_React$Component) {
  _inherits(AbstractWidget, _React$Component);

  function AbstractWidget() {
    _classCallCheck(this, AbstractWidget);

    return _possibleConstructorReturn(this, (AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).apply(this, arguments));
  }

  _createClass(AbstractWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.willUnmount = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadWidget();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadWidget();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.willUnmount = true;
    }
  }, {
    key: 'loadWidget',
    value: function loadWidget() {
      var _this2 = this;

      var widgetWrapper = this.refs.widgetWrapper;

      var $script = require('scriptjs');

      $script.ready('twitter-widgets', function () {
        // Delete existing
        _this2.removeChildren(widgetWrapper);

        // Create widget
        _this2.props.ready(window.twttr, widgetWrapper, _this2.done.bind(_this2));
      });
    }
  }, {
    key: 'done',
    value: function done() {
      // if (this.willUnmount) {
        this.removeChildrenExceptLast(this.refs.widgetWrapper);
      // }
    }
  }, {
    key: 'removeChildren',
    value: function removeChildren(node) {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }, {
    key: 'removeChildrenExceptLast',
    value: function removeChildrenExceptLast(node) {
      if (node) {
        while (node.childNodes.length > 1) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: 'widgetWrapper', style: { height: '100%', width: '100%'} });
    }
  }]);

  return AbstractWidget;
}(_react2.default.Component);

AbstractWidget.propTypes = {
  ready: _react2.default.PropTypes.func.isRequired
};
exports.default = AbstractWidget;
