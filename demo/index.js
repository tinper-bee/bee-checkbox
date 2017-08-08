
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;



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
				<Checkbox disabled> checkbox</Checkbox>
				<Checkbox ref="test" checked onHandleChange={this.onChange}> checkbox</Checkbox>
			</div>
		)
	}
}/**
 * @title 多颜色`Checkbox`
 * @description `colors`参数控制背景色
 */
class Demo2 extends Component {
	render(){
		return (
			<div className="demo-checkbox">
				<Checkbox colors="info"> checkbox</Checkbox>
				<Checkbox colors="dark"> checkbox</Checkbox>
			</div>
		)
	}
}/**
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
				<Checkbox checked={this.state.checked} onHandleChange={this.onChange}> checkbox2</Checkbox>
			</div>
		)
	}
}var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"\r\n0./**\r\n * @title Checkbox\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\r\n */\r\nclass Demo1 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.onChange = this.onChange.bind(this);\r\n\t}\r\n\tonChange() {\r\n\t\tconsole.log(\"hook\");\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<Checkbox disabled> checkbox</Checkbox>\r\n\t\t\t\t<Checkbox ref=\"test\" checked onHandleChange={this.onChange}> checkbox</Checkbox>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"},{"example":<Demo2 />,"title":" 多颜色`Checkbox`","code":"/**\r\n * @title 多颜色`Checkbox`\r\n * @description `colors`参数控制背景色\r\n */\r\nclass Demo2 extends Component {\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<Checkbox colors=\"info\"> checkbox</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"dark\"> checkbox</Checkbox>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" Checkbox","code":"/**\r\n * @title Checkbox\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\r\n */\r\nclass Demo3 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tchecked: false,\r\n\t\t\tchecked2: false,\r\n\t\t\tcheckedAll: false,\r\n\t\t}\r\n\t\tthis.onChange = this.onChange.bind(this);\r\n\t\tthis.onCheckedAll = this.onCheckedAll.bind(this);\r\n\t}\r\n\tonChange() {\r\n\t\tthis.setState({checkedAll:!this.state.checkedAll})\r\n\t}\r\n\tonCheckedAll() {\r\n\t\tthis.setState({checkedAll:!this.state.checkedAll,checked:!this.state.checked});\r\n\t}\r\n\tchangeCheck() {\r\n\t\tthis.setState({checked:!this.state.checked});\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<button onClick={this.changeCheck.bind(this)}>change checkbox</button>\r\n\t\t\t\t<Checkbox checked={this.state.checked} onHandleChange={this.onChange}> checkbox2</Checkbox>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
