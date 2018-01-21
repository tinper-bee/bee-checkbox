import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import {createChainedFunction} from 'tinper-bee-core';
//import warning from 'warning';


const propTypes = {

    colors: PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

    disabled: PropTypes.bool,

};

const defaultProps = {
    disabled: false,
    colors: 'primary',
    clsPrefix: 'u-checkbox',
    defaultChecked: false,
};
const clsPrefix = 'u-checkbox';
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked
        }
        this.changeState = this.changeState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
              checked: nextProps.checked,
            });
        }
    }

    changeState() {
        const { props } = this;
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            this.setState({
                checked: !this.state.checked,
            });
        }

        if (props.onChange instanceof Function) {
            props.onChange(!this.state.checked);
        }
    }

    render() {
        const {
            disabled,
            colors,
            size,
            className,
            indeterminate,
            children,
            checked,
            clsPrefix,
            onChange,
            ...others
        } = this.props;


        const input = (
            <input
                {...others}
                type="checkbox"
                disabled={this.props.disabled}
            />
        );

        let classes = {
            'is-checked': this.state.checked,
            disabled
        };

        if (colors) {
            classes[`${clsPrefix}-${colors}`] = true;
        }

        if (size) {
            classes[`${clsPrefix}-${size}`] = true;
        }

        if (!checked && indeterminate) {
            classes[`${clsPrefix}-indeterminate`] = true;
        }

        let classNames = classnames(clsPrefix, classes);


        return (
            <label className={classnames(classNames, className)} onClick={this.changeState}>
                {input}
                <label className={clsPrefix+'-label'}>{children}</label>
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
