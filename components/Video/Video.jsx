import React from 'react';

// Style
import s from './Video.module.scss'

const Video = () => {
    return (
        <div className={s.video}>
           <iframe className={s.video__iframe} width="1864" height="808" src="https://www.youtube.com/embed/ajnkfYxqWjM" title="Shelby Cobra... Миша, ты серьёзно?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
};

export default Video;