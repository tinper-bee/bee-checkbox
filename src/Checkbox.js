import classnames from 'classnames';
import React, { PropTypes } from 'react';
import {createChainedFunction} from 'tinper-bee-core';
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
    //this.changeState = this.changeState.bind(this);
	}

  componentWillReceiveProps(nextProp) {
    this.setState({checked:nextProp.checked});
  }
 
changeState () {
    const {onChange} = this.props;
		if(this.props.disabled == false){
			this.setState({checked:!this.state.checked});
		}
    if(onChange instanceof Function) {
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
        onHandleChange,
	      ...others
    	} = this.props;

    
    const input = (
      	<input
        {...others}
        onChange={this.changeState.bind(this)}
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

    console.log("render");

    return (
        <label className={classNames}>
          {input}
          <label className="u-checkbox-label">{children}</label>
        </label>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
