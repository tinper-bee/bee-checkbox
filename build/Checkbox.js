'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import warning from 'warning';


var propTypes = {

    colors: _react.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

    disabled: _react.PropTypes.bool

};

var defaultProps = {
    disabled: false,
    colors: 'primary',
    clsPrefix: 'u-checkbox',
    defaultChecked: false
};
var clsPrefix = 'u-checkbox';

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked
        };
        _this.changeState = _this.changeState.bind(_this);
        return _this;
    }

    Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProp) {
        if (nextProp.hasOwnProperty('checked')) {
            this.setState({
                checked: nextProp.checked
            });
        }
    };

    Checkbox.prototype.changeState = function changeState() {
        var _props = this.props,
            onChange = _props.onChange,
            disabled = _props.disabled;
        var checked = this.state.checked;

        if (disabled == false) {
            this.setState({
                checked: !checked
            });
        }

        if (onChange instanceof Function) {
            onChange(!this.state.checked);
        }
    };

    Checkbox.prototype.render = function render() {
        var _props2 = this.props,
            disabled = _props2.disabled,
            colors = _props2.colors,
            size = _props2.size,
            className = _props2.className,
            indeterminate = _props2.indeterminate,
            children = _props2.children,
            checked = _props2.checked,
            clsPrefix = _props2.clsPrefix,
            onChange = _props2.onChange,
            others = _objectWithoutProperties(_props2, ['disabled', 'colors', 'size', 'className', 'indeterminate', 'children', 'checked', 'clsPrefix', 'onChange']);

        var input = _react2["default"].createElement('input', _extends({}, others, {
            onClick: this.changeState,
            type: 'checkbox',
            disabled: this.props.disabled
        }));

        var classes = {
            'is-checked': this.state.checked,
            disabled: disabled
        };

        if (colors) {
            classes[clsPrefix + '-' + colors] = true;
        }

        if (size) {
            classes[clsPrefix + '-' + size] = true;
        }

        if (!checked && indeterminate) {
            classes[clsPrefix + '-indeterminate'] = true;
        }

        var classNames = (0, _classnames2["default"])(clsPrefix, classes);

        return _react2["default"].createElement(
            'label',
            { className: (0, _classnames2["default"])(classNames, className) },
            input,
            _react2["default"].createElement('label', { className: 'u-checkbox-label' }),
            _react2["default"].createElement(
                'span',
                null,
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