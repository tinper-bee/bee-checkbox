import classnames from 'classnames';
import React, {PropTypes} from 'react';
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
    defaultChecked: false
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

    componentWillReceiveProps(nextProp) {
        if(nextProp.hasOwnProperty('checked')){
            this.setState({
                checked: nextProp.checked
            });
        }
    }

    changeState() {
        const {onChange, disabled} = this.props;
        let { checked } = this.state;
        if (disabled == false) {
            this.setState({
                checked: !checked
            });
        }

        if (onChange instanceof Function) {
            onChange(!this.state.checked);
        }
    }


    render() {
        const {
            disabled,
            colors,
            size,
            className,
            children,
            checked,
            clsPrefix,
            onChange,
            ...others
        } = this.props;


        const input = (
            <input
                {...others}
                onChange={this.changeState}
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

        let classNames = classnames(clsPrefix, classes);


        return (
            <label className={classnames(classNames, className)}>
                {input}
                <label className="u-checkbox-label"></label>
                <span>{children}</span>
            </label>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
