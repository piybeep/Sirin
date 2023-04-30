import React from "react";

// Style
import s from "./Video.module.scss";

const Video = () => {
	return (
		<div className={s.video}>
			<iframe
				className={s.video__iframe}
				width="1864"
				height="808"
				src="https://www.youtube.com/embed/N9Slx5bHF8s"
				title="Танцевальный спектакль | Царевна-лягушка"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	);
};

export default Video;
