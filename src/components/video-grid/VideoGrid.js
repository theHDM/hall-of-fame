import React, {Component} from 'react';
import YoutubeEmbed from '../youtube-embed/YoutubeEmbed'

const VideoColumn = props => (
    <div className="col-sm-4 mb-4">
        <YoutubeEmbed {...props} />
    </div>
);

export default class VideoGrid extends Component {
    render() {
        window.videoData = [];
        const videoColumns = [];
        this.props.tournaments.forEach((tournament, i) => {
           if(tournament.video && tournament.video.includes('you') && tournament.tournamentName) {
               videoColumns.push(
                   <VideoColumn
                       src={tournament.video}
                       title={tournament.tournamentName}
                       key={`${tournament.tournamentName}_${i}`}
                   />
               );
           }
        });

        return (
            <div className="container">
                <h1 className="display-3 mb-5 mt-2">VODs</h1>
                <div className="row">
                    {videoColumns}
                </div>
            </div>
        )
    }
}