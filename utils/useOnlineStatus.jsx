import React, { useState } from 'react'

function useOnlineStatus() {
    const [onlineStatus, setonlineStatus] = useState(true);
    window.addEventListener("offline", ()=>{
        setonlineStatus(false);
    window.addEventListener("online", ()=>{
        setonlineStatus(true);
    })
    })
  return onlineStatus;
}

export default useOnlineStatus
