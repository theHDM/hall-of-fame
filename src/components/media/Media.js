import React from 'react';
import YoutubeEmbed from '../youtube-embed/YoutubeEmbed';
import { Card, CardImg, CardTitle, CardDeck, CardBody } from 'reactstrap';

const Media = () => (
    <div className="container">
        <h1 className="display-3 mb-5 mt-2">Media</h1>
        <div className='mb-5'>
            <YoutubeEmbed src="https://www.youtube.com/watch?v=AXkNNGk2LwI"
                          title="Uniorz Challenge Participants' Highlights"/>
        </div>
        <h3 className="mb-3">Player interviews</h3>
        <CardDeck className="mb-5">
            <Card tag="a" href="https://vk.com/@carnage_ql-provest-interview" target="_blank">
                <CardImg top
                         src="https://pp.userapi.com/c847221/v847221513/ab05/j2DVax9fZ_o.jpg" alt="ProVest" />
                <CardBody>
                    <CardTitle>
                        ProVest
                        <span className="border ml-2 flag-icon flag-icon-ru"></span>
                    </CardTitle>
                </CardBody>
            </Card>
            <Card tag="a" href="https://vk.com/@carnage_ql-mixer-interview" target="_blank">
                <CardImg top
                         src="https://pp.userapi.com/c841231/v841231324/77d94/HBdCe8FNvYA.jpg" alt="MiXeR" />
                <CardBody>
                    <CardTitle>
                        MiXeR
                        <span className="border ml-2 flag-icon flag-icon-ua"></span>
                    </CardTitle>
                </CardBody>
            </Card>
        </CardDeck>
    </div>
);

export default Media;