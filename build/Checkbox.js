'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import warning from 'warning';


var propTypes = {

  colors: _react2["default"].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

  disabled: _react2["default"].PropTypes.bool

};

var defaultProps = {
  disabled: false,
  colors: 'primary'
};
var clsPrefix = 'u-checkbox';

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  Checkbox.prototype.changeState = function changeState() {
    if (this.props.disabled == false) {
      this.setState({ checked: !this.state.checked });
    }
  };

  Checkbox.prototype.render = function render() {
    var _props = this.props;
    var disabled = _props.disabled;
    var colors = _props.colors;
    var size = _props.size;
    var className = _props.className;
    var children = _props.children;

    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'size', 'className', 'children']);

    var input = _react2["default"].createElement('input', _extends({}, others, {
      type: 'checkbox',
      disabled: this.props.disabled
    }));

    var classes = {
      'u-checkbox': true,
      'is-checked': this.state.checked,
      disabled: disabled
    };

    if (colors) {
      classes[clsPrefix + '-' + colors] = true;
    }

    if (colors) {
      classes[clsPrefix + '-' + colors] = true;
    }

    if (size) {
      classes[clsPrefix + '-' + size] = true;
    }

    return _react2["default"].createElement(
      'label',
      { className: (0, _classnames2["default"])(className, classes), onClick: this.changeState.bind(this) },
      input,
      _react2["default"].createElement(
        'label',
        { className: 'u-checkbox-label' },
        children
      )
    );
  };

  return Checkbox;
}(_react2["default"].Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports["default"] = Checkbox;
module.exports = exports['default'];