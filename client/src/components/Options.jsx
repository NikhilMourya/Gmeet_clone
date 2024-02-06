import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { socketContext } from "./SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser,callEnded } =
    useContext(socketContext);
  const [idtoCall, setIdtoCall] = useState("");
  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <h2>Account Info</h2>
        <p>{me}</p>
        <CopyToClipboard text={me}>
          <button>Copy Your ID</button>
        </CopyToClipboard>
      </div>
      <div>
        <input value={idtoCall} onChange={(e) => setIdtoCall(e.target.value)}></input>
        <h2>Make A Call</h2>
        {
          callAccepted && !callEnded ? (
            <button onClick={leaveCall}>Hang Up</button>
          ) : (
            <button onClick={()=>callUser(idtoCall)}>Call</button>
          ) 
        }
      </div>

      {children}
    </div>
  );
};

export default Options;
