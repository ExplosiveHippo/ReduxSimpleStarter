import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCuQDQwpDG4HkTObdyPPSYFzt8tq8TNZsQ';


// Create a new componenent. It produces some HTML.
class App extends Component {

	constructor(props) {
		
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({'key': API_KEY, 'term': 'skateboarding'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
		});

	}

	render() {
		return(
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} 
				/>
			</div>
		);
	};
}

// Put component into DOM.
ReactDOM.render(<App />, document.querySelector('.container'));