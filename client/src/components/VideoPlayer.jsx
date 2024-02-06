import React, { useContext } from "react";
// import {} from '@mui/material'
import { socketContext } from "./SocketContext";

const VideoPlayer = () => {
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    name,
    stream,
    callEnded,
    me,
    setName,
    callUser,
    leaveCall,
    answerCall,
  } = useContext(socketContext);
  return (
    <div>
      {stream && (
        <div>
          <h4>My video {name || "name"}</h4>
          <video ref={myVideo} autoPlay playsInline muted></video>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <h4>USer video{call.name || "name"}</h4>
          <video ref={userVideo} autoPlay playsInline muted></video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
