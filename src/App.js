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
		// To make the CSS work, attach the class `board`
		// to a div and make sure its direct children 
		// have the class `tile`.

		// EX:
		// The final rendered html should look like the following:
		// <div class="board">
		// 		<div class="tile" />
		// 		<div class="tile" />
		// 		<div class="tile" />
		// 		<div class="tile" />
		//	</div>

		return (
			<div>
			</div>
		);
	}
}

export default App;
