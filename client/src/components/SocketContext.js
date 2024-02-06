import React,{createContext,useState,useRef,useEffect} from "react";
import {io} from "socket.io-client"
import Peer from 'simple-peer'

const socketContext = createContext();
const socket = io('http://localhost:5000');

const ContextProvider = ({children})=>{

    const [stream,SetStream] =useState(null);
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    const [me,SetMe] = useState('');
    const [call,setCall] = useState({});
    const [callAccepted,setCallAccpeted]= useState(false);
    const [callEnded,setCallEnded]= useState(false);
    const [name,setName]= useState('');

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((stream)=>{
            SetStream(stream);
            myVideo.current.srcObject = stream;
        })

        socket.on('me',(id)=>{
            SetMe(id)
        })

        socket.on('calluser',({from,name:callerName,signal})=>{
            setCall({isRecieved:true,from,name:callerName,signal});
        })
    },[]) 

    const answerCall=()=>{
        setCallAccpeted(true);
        const peer = new Peer({initiator:false,trickle:false,stream});
        peer.on('signal',(data)=>{
            socket.emit('answercall',{signal:data,to:call.from})

        })

        peer.on('stream',(currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })

        peer.signal(call.signal)

        connectionRef.current = peer

    }

    const callUser=(id)=>{
        const peer = new Peer({initiator:true,trickle:false,stream});
        peer.on('signal',(data)=>{
            socket.emit('calluser',{userToCall:id,signalData:data,from:me,name})

        })

        peer.on('stream',(currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })
        
        socket.on('callaccepted',(signal)=>{
            setCallAccpeted(true);
            peer.signal(signal)
        })
        connectionRef.current = peer
    }

    const leaveCall =()=>{
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    }

    return (
        <socketContext.Provider value={{
            call,callAccepted,
            myVideo,
            userVideo,
            name,
            stream,
            callEnded,me,setName,
            callUser,
            leaveCall,
            answerCall
        }}>
            {children}
        </socketContext.Provider>
    )
}

export {ContextProvider,socketContext}