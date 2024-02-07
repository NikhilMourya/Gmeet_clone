import React, { useContext } from 'react'
import {socketContext} from './SocketContext'


const Notifications = () => {
  const {answerCall,call,callAccepted} = useContext(socketContext)
  return (
    <div className=''>{call.isRecieved && !callAccepted &&(
      <div style={{display:'flex',justifyContent:'center'}}>
        <h1>{call.name} is calling</h1>
        <button onClick={answerCall}>
          Accept
        </button>
        <button className='bg-red-500'>
          Decline
        </button>
      </div>
    )}</div>
  )
}

export default Notifications