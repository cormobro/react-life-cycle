import React, { Component } from 'react';

class Timer extends Component {
	constructor(props){
        super(props) 
                this.state = {
                          count : 0,
			speed: 1000
                            }
	this.increaseCount = this.increaseCount.bind(this)
	}

	increaseCount(){
		const { count } = this.state
		this.setState({count: (count<10000) ? count + 1 : 0})
	}

	componentDidMount() {
		setInterval( this.increaseCount, 1000)
	}

	componentDidUpdate() {
        	console.log('Le composant a été mis à jour');
        }
	
	render() {
		return (
		<div>
			{this.state.count}
		</div>
		);
	}
}

export default Timer;

