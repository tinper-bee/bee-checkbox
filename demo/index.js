
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"\n/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\n\nimport React, { Component } from 'react';\nimport Checkbox from 'tinper-bee';\n\n\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcheckedFlag:false\n\t\t}\n\t\tthis.onChange = this.onChange.bind(this);\n\t}\n\tonChange(e) {\n\t\tconsole.log(e);\n\t\tthis.setState({checkedFlag:e});\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox disabled className=\"test\"> checkbox</Checkbox>\n\t\t\t\t<Checkbox ref=\"test\" checked={this.state.checkedFlag} onChange={this.onChange}> 全选</Checkbox>\n\t\t\t\t<Checkbox ref=\"test\" indeterminate onChange={this.onChange}> 半选</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"},{"example":<Demo2 />,"title":" 多颜色`Checkbox`","code":"/**\n * @title 多颜色`Checkbox`\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react';\nimport Checkbox from 'tinper-bee';\n\n\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox colors=\"info\"> checkbox</Checkbox>\n\t\t\t\t<Checkbox colors=\"dark\"> checkbox</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\nimport React, { Component } from 'react';\nimport Checkbox from 'tinper-bee';\n\n\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tchecked: false,\n\t\t\tchecked2: false,\n\t\t\tcheckedAll: false,\n\t\t}\n\t\tthis.onChange = this.onChange.bind(this);\n\t\tthis.onCheckedAll = this.onCheckedAll.bind(this);\n\t}\n\tonChange() {\n\t\tthis.setState({checkedAll:!this.state.checkedAll})\n\t}\n\tonCheckedAll() {\n\t\tthis.setState({checkedAll:!this.state.checkedAll,checked:!this.state.checked});\n\t}\n\tchangeCheck() {\n\t\tthis.setState({checked:!this.state.checked});\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<button onClick={this.changeCheck.bind(this)}>change checkbox</button>\n\t\t\t\t <Checkbox checked={this.state.checked}> checkbox2</Checkbox>\n\t\t\t\t<Checkbox defaultChecked={this.state.checked}> checkbox2</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"}]


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
