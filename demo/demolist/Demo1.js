
/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */

import React, { Component } from 'react';
import Checkbox from '../../src';

export default class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	onChange() {
		console.log("hook");
	}
	render () {
		return (
			<div className="demo-checkbox">
				<Checkbox disabled className="test"> checkbox</Checkbox>
				<Checkbox ref="test" checked onHandleChange={this.onChange}> 全选</Checkbox>
				<Checkbox ref="test" indeterminate onHandleChange={this.onChange}> 半选</Checkbox>
			</div>
		)
	}
}