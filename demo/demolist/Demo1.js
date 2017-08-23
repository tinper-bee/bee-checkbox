
0./**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */
class Demo1 extends Component {
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
				<Checkbox ref="test" checked onHandleChange={this.onChange}> checkbox</Checkbox>
			</div>
		)
	}
}