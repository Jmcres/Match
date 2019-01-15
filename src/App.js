import React, { Component } from 'react';
import './App.css';

class App extends Component {

	shuffle = (array) => {
		// Given an array, will return a shuffled version of the array
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}


	render() {
		return (
			<div className="board">
			</div>
		);
	}
}

export default App;
