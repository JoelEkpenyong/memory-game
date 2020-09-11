import React from 'react';
import Box from './box';
import './box-field.css';

class Boxes extends React.Component {
	currColor = null;
	constructor(props) {
		super(props);
		this.state = {
			colors: Array(this.props.colors.length).fill('')
		};
		this.onClick = this.onClick.bind(this);
		this.checkColors = this.checkColors.bind(this);
	}

	onClick(e) {
		let { colors } = this.state;
		colors.fill('');
		colors[e.target.name] = this.props.colors[e.target.name];
		this.setState({ colors });
		this.currColor = this.checkColors(e);

		// if (this.checkColors(e) === this.currColor) {
		// 	console.log('same color');
		// }
		// console.log(this.checkColors(e));
	}

	checkColors(e) {
		// console.log(this.state.colors);
		let val_1 = e.target.value;
		if (this.state.colors.some((color, i) => color === val_1)) {
			console.log('found matching pair');
		}

		// const color = this.state.colors[val_1];
		// return color;
		// console.log(this.state.colors[val_1]);
	}

	render() {
		const { colors } = this.state;
		const boxes = colors.map((color, i) => (
			<Box key={i} bgColor={colors[i]} index={i} onclick={this.onClick} checkColors={this.checkColors} />
		));
		return <div className="boxes">{boxes}</div>;
	}
}

export default Boxes;
