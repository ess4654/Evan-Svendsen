import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper p-relative d-inline-block' style={{...this.props.style, position: "relative", marginLeft: "1rem", marginRight: "1rem", verticalAlign: "top" }}>
            <ReactPlayer
            className='react-player'
            url={this.props.url}
            width={400}
            height={300}
            controls={true}
            loop={true}

            />
            <p className="pt-2" style={{width: 400, wordWrap: "break-word"}}>{this.props.description}</p>
        </div>
        );
    }
}

export default Video;