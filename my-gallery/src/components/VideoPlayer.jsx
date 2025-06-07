import React, { useRef } from "react";

const VideoPlayer = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => videoRef.current.play();
    const handleMouseLeave = () => videoRef.current.pause();

    return (
        <div className="video-player">
            <h2>Promo video</h2>
            <video
                id="promoVideo"
                width="320"
                controls
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <source
                    src="/mixkit-pink-orange-and-yellow-ink-dissolving-in-water-41996-hd-ready.mp4"
                    type="video/mp4"
                />
                Váš prohlížeč nepodporuje přehrávání videa.
            </video>
        </div>
    );
};


export default VideoPlayer;