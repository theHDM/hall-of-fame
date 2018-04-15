import React from 'react';
import embed from 'embed-video';

const YoutubeEmbed = ({src}) => (
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${embed.info(src).id}`}
                allowFullScreen ></iframe>
    </div>
);

export default YoutubeEmbed;