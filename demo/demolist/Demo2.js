/**
 * @title 多颜色`Checkbox`
 * @description `colors`参数控制背景色
 */

import React, { Component } from 'react';
import Checkbox from '../../src';

class Demo2 extends Component {
	render(){
		return (
			<div className="demo-checkbox">
				<Checkbox colors="info">checkbox</Checkbox>
				<Checkbox colors="dark">checkbox</Checkbox>
			</div>
		)
	}
}
export default Demo2;
