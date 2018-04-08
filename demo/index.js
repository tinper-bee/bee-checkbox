
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\n\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            checkedFlag: false\n        }\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(e) {\n        console.log(e);\n        this.setState({checkedFlag: e});\n    }\n\n    handleDblClick = (state) => {\n\t\tconsole.log(state);\n    }\n\n    render() {\n        return (\n            <div className=\"demo-checkbox\">\n                <Checkbox\n                    disabled\n                    className=\"test\">\n                    checkbox\n                </Checkbox>\n                <Checkbox\n                    onDoubleClick={ this.handleDblClick }\n                    ref=\"test\"\n                    checked={this.state.checkedFlag}\n                    onChange={this.onChange}>\n                    全选\n                </Checkbox>\n                <Checkbox\n                    ref=\"test\"\n                    indeterminate\n                    onChange={this.onChange}>\n                    半选\n                </Checkbox>\n            </div>\n        )\n    }\n}\n\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。","scss_code":".demo-checkbox .u-checkbox {\n    display: block;\n}"},{"example":<Demo2 />,"title":" 多颜色`Checkbox`","code":"/**\n * @title 多颜色`Checkbox`\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox colors=\"info\">checkbox</Checkbox>\n\t\t\t\t<Checkbox colors=\"dark\">checkbox</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `colors`参数控制背景色","scss_code":".demo-checkbox .u-checkbox {\n    display: block;\n}"},{"example":<Demo3 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tchecked: false\n\t\t}\n\t}\n\tchangeCheck=()=> {\n\t\tthis.setState({checked:!this.state.checked});\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<button onClick={this.changeCheck.bind(this)}>change checkbox</button>\n\t\t\t\t <Checkbox checked={this.state.checked} onChange={this.changeCheck}>checkbox2</Checkbox>\n\t\t\t\t<Checkbox defaultChecked={this.state.checked}>checkbox2</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。","scss_code":".demo-checkbox .u-checkbox {\n    display: block;\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
