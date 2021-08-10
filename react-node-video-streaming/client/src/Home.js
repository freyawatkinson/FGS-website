import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    // Request to endpoint localhost to return video array metadata
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/videos');
            const data = await response.json();
            this.setState({ videos: [...data] });
        } catch (error) {
            console.log(error);
        }
    }
    // Render array as a list of videos
    render() {
        return (
            <div className="App App-header">
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                <div className="card border-0">
                                    {/* End point request to return thumbnail of video */}
                                    <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                    <div className="card-body">
                                        <p>{video.name}</p>
                                        <p>{video.duration}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}