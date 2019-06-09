// How to create a project on VS code

/*
 npx create-react-app my-app
 cd my-app
 npm start

 */

function Person() {
  // P should be capital
  return <div>Name : Manpreet</div>; // function to return the view
}

ReactDOM.render(<Person />, document.querySelector("#id")); // render the fn as an HTML element

// // How we can make it dynamic say make Name to be dynamic
function Person(props) {
  return <div>Name : {props.name}</div>; // will dynamically access the props by using single curly braces and accessing the props
}

ReactDOM.render(<Person name="Manpreet" />, document.querySelector("#id")); // render the fn as an HTML element
