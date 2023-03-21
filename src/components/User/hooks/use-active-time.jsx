import { useEffect, useState } from "react";
import { baseUrl } from "../../../axiosInstance/constants";

export const UseActiveTime = (props) => {
  const [startTime, setStartTime] = useState(null)
  const token = props.token
  const id = props.userId
  const url = `${baseUrl}/users/${id}/active_time`

  useEffect(() => {
    function handleUnload() {
      const endTime = new Date()
      // console.log("Handle unLoad triggered")
      // console.log(`End Time: ${endTime}`)
      if (props.isLoggedIn) {
        sendTimeToServer(startTime, endTime);
      }
    }

    function handleFocus() {
      setStartTime(new Date());
      // console.log("Handle Focus triggered")
      // console.log(`Start Time: ${startTime}`)
    }

    window.addEventListener('beforeunload', handleUnload)
    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
      window.removeEventListener('focus', handleFocus)
    };
  }, [startTime, props.isLoggedIn]);

  function sendTimeToServer(startTime, endTime) {
    const isReadyForServer = startTime && endTime;
    if (isReadyForServer) {
      const activeTime = ((endTime.getTime() - startTime.getTime())/60000);
      const data = { active_time: activeTime }
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the PUT request', error);
        });
    } else {
      console.log('was not ready for the server')
    }
  }
}
