/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */

import React, { Component } from 'react';
import Checkbox from '../../src';

class Demo3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		}
	}
	changeCheck=()=> {
		this.setState({checked:!this.state.checked});
	}
	render () {
		return (
			<div className="demo-checkbox">
				<button onClick={this.changeCheck.bind(this)}>change checkbox</button>
				 <Checkbox checked={this.state.checked} onChange={this.changeCheck}>checkbox2</Checkbox>
				<Checkbox defaultChecked={this.state.checked}>checkbox2</Checkbox>
			</div>
		)
	}
}
export default Demo3;