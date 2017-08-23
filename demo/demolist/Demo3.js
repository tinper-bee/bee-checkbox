/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */
class Demo3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			checked2: false,
			checkedAll: false,
		}
		this.onChange = this.onChange.bind(this);
		this.onCheckedAll = this.onCheckedAll.bind(this);
	}
	onChange() {
		this.setState({checkedAll:!this.state.checkedAll})
	}
	onCheckedAll() {
		this.setState({checkedAll:!this.state.checkedAll,checked:!this.state.checked});
	}
	changeCheck() {
		this.setState({checked:!this.state.checked});
	}
	render () {
		return (
			<div className="demo-checkbox">
				<button onClick={this.changeCheck.bind(this)}>change checkbox</button>
				 <Checkbox checked={this.state.checked}> checkbox2</Checkbox>
				<Checkbox defaultChecked={this.state.checked}> checkbox2</Checkbox>
			</div>
		)
	}
}