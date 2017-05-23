import classnames from 'classnames';
import React, { PropTypes } from 'react';
//import warning from 'warning';


const propTypes = {

  colors: PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),

  disabled: PropTypes.bool,

};

const defaultProps = {
  disabled: false,
  colors: 'primary',
  clsPrefix: 'u-checkbox',
  checked:false
};
const clsPrefix = 'u-checkbox';
class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : this.props.checked
		}
	}

  componentWillReceiveProps(nextProp) {
    this.setState({checked:nextProp.checked});
  }

	changeState () {
    const {onChange} = this.props;
		if(this.props.disabled == false){
			this.setState({checked:!this.state.checked});
		}
    if(onChange) {
      onChange();
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
        type="checkbox"
        disabled={this.props.disabled}
        />
    );

    let classes = {
    	'is-checked':this.state.checked,
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
        <label {...others} className={classNames} onClick={this.changeState.bind(this)}>
          {input}
          <label className="u-checkbox-label">{children}</label>
        </label>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
