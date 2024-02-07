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
    <div className="relative overflow-hidden h-5/6">
      <div className="grid grid-rows-1 grid-cols-1">
        <div className="flex justify-center items-center">
          {callAccepted && !callEnded && (
            <div className="">
              <h4>USer video{call.name || "name"}</h4>
              <video ref={userVideo} autoPlay playsInline muted></video>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-5 right-5 h-40">
        {stream && (
          <div>
            <h4>My video {name || "name"}</h4>
            <video className="h-40 w-40"  ref={myVideo} autoPlay playsInline muted></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
