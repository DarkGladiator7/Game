import React from "react";
import AudioPlayer from "react-audio-player";
const AudioPlayerComponent=()=> {
    return(
        <AudioPlayer
        src="C:\Dark007\New folder\GameIt\Game\src\assests\Feel-Good(chosic.com).mp3"
        autoPlay
        controls
        />
    );
};

export default AudioPlayerComponent;