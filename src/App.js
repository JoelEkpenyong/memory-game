import React from 'react';
import Boxes from './box-field';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.shuffleArray = this.shuffleArray.bind(this);
	}
	static defaultProps = {
		colors: [ 'DarkCyan', 'DarkGoldenRod', 'DarkGreen', 'DarkMagenta', 'DarkRed', 'DeepPink', 'DodgerBlue', 'Tan' ]
	};

	shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	render() {
		let colors = this.props.colors.slice();
		let randomColors = colors.concat(colors);
		return <Boxes colors={this.shuffleArray(randomColors)} />;
	}
}

export default App;
