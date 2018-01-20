
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"\n/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\n\nimport React, { Component } from 'react';\nimport Checkbox from 'bee-checkbox';\n\n class Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcheckedFlag:false\n\t\t}\n\t\tthis.onChange = this.onChange.bind(this);\n\t}\n\tonChange(e) {\n\t\tconsole.log(e);\n\t\tthis.setState({checkedFlag:e});\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox disabled className=\"test\">checkbox</Checkbox>\n\t\t\t\t<Checkbox ref=\"test\" checked={this.state.checkedFlag} onChange={this.onChange}>全选</Checkbox>\n\t\t\t\t<Checkbox ref=\"test\" indeterminate onChange={this.onChange}>半选</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"},{"example":<Demo2 />,"title":" 多颜色`Checkbox`","code":"/**\n * @title 多颜色`Checkbox`\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react';\nimport Checkbox from 'bee-checkbox';\n\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox colors=\"info\">checkbox</Checkbox>\n\t\t\t\t<Checkbox colors=\"dark\">checkbox</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\nimport React, { Component } from 'react';\nimport Checkbox from 'bee-checkbox';\n\nclass Demo3 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tchecked: false\n\t\t}\n\t}\n\tchangeCheck=()=> {\n\t\tthis.setState({checked:!this.state.checked});\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<button onClick={this.changeCheck.bind(this)}>change checkbox</button>\n\t\t\t\t <Checkbox checked={this.state.checked} onChange={this.changeCheck}>checkbox2</Checkbox>\n\t\t\t\t<Checkbox defaultChecked={this.state.checked}>checkbox2</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。"}]


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
