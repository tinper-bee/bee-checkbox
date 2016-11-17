import Demo from './CheckboxDemo';
import ReactDOM from 'react-dom';
import Checkbox from '../src';

function demo1 () {
	return (
		<div className="demo-checkbox">
			<Checkbox> checkbox</Checkbox>
			<Checkbox disabled> checkbox</Checkbox>
			<Checkbox checked> checkbox</Checkbox>
			<Checkbox checked disabled> checkbox</Checkbox>
		</div>
	)
}

function demo2 () {
	return (
		<div className="demo-checkbox">
			<Checkbox colors="danger"> checkbox</Checkbox>
			<Checkbox colors="info"> checkbox</Checkbox>
			<Checkbox colors="success"> checkbox</Checkbox>
			<Checkbox colors="dark"> checkbox</Checkbox>
			<Checkbox colors="danger"> checkbox</Checkbox>
		</div>
	)
}
ReactDOM.render(demo1(), document.getElementById('ReactCheckboxDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactCheckboxDemo2'));