import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCuQDQwpDG4HkTObdyPPSYFzt8tq8TNZsQ';

YTSearch({'key': API_KEY, 'term': 'skateboarding'}, function(data) {
	console.log(data);
});

// Create a new componenent. It produces some HTML.
const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
}

// Put component into DOM.
ReactDOM.render(<App />, document.querySelector('.container'));