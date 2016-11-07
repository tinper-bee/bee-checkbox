import classNames from 'classnames';
import React from 'react';
//import warning from 'warning';


const propTypes = {

  colors: React.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),

  disabled: React.PropTypes.bool,
  
};

const defaultProps = {
  disabled: false,
  colors: 'primary'
};
const clsPrefix = 'u-checkbox';
class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : this.props.checked
		}
	}
	changeState () {
		if(this.props.disabled == false){
			this.setState({checked:!this.state.checked});
		}
	}

  	render() {
	    const {
	      disabled,
	      colors,
	      size,
	      className,
	      children,
	      ...others
    	} = this.props;


    const input = (
      	<input
        {...others}
        type="checkbox"
        disabled={this.props.disabled}
        />
    );

    const classes = {
    	'u-checkbox':true,
    	'is-checked':this.state.checked,
    	disabled
    };

    if (colors) {
        classes[`${clsPrefix}-${colors}`] = true;
    }

    if (colors) {
        classes[`${clsPrefix}-${colors}`] = true;
    }

    if (size) {
      classes[`${clsPrefix}-${size}`] = true;
    }

    return (
        <label refs="checkbox" className={classNames(className, classes)} onClick={this.changeState.bind(this)}>
          {input}
          <label className="u-checkbox-label">{children}</label>
        </label>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
