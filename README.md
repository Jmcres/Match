## Match

Please run your JSON server by running `json-server --watch db.json` from the top level of this repository. This will start up a server serving up an array of color names as strings from `http://localhost:3000/colors`.
You can use the provided `shuffle` function in your `App` component to randomize the order of the colors. 

We have provided you with a `Tile.js` file - we'll leave it up to you to implement it. Consider whether it should be a functional or a class component, and be prepared to give a concrete reason as to why it is one or the other. Other than that, feel free to add any components that you want/need!

To make the CSS work, attach the class `board`
to a div and make sure its direct children 
have the class `tile`.

EX:
The final rendered html should look like the following:

```html
<div class="board">
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
		<div class="tile" />
</div>
```