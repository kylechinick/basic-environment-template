// import $ from 'jquery';

const exampleTestFunction = () => {
  console.log('hi there, from the deck');
  return 'hi there, from the deck';
};

export default exampleTestFunction; // Exported here instead of the declaration line because this example function's use of the arrow syntax means that exampleTestFunction is technically a variable, not a function (even though it holds a function as its value)
