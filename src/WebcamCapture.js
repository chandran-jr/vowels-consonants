import React, { useRef } from 'react';
import Webcam from 'react-webcam';


const VideoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user',
};

function WebcamCapture() {

    const WebcamRef = useRef(null)

    return (
        <div className="webcamCapture">
            <Webcam
                audio = {false}
                height = {VideoConstraints.height}
                ref = {WebcamRef}
                screenshotFormat = "image/jpeg"
                width = {VideoConstraints.width}
                videoConstraints = {VideoConstraints}

            />
        </div>
    )
}

export default WebcamCapture
