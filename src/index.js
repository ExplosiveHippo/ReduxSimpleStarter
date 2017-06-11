import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCuQDQwpDG4HkTObdyPPSYFzt8tq8TNZsQ';

// Create a new componenent. It produces some HTML.
const App = () => {
	return <div>Hi</div>;
}

// Put component into DOM.
ReactDOM.render(<App />, document.querySelector('.container'));