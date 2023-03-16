import { useEffect, useRef } from "react";
import axios from 'axios';
import { baseUrl } from "../../../axiosInstance/constants";

export const UseActiveTime = (props) => {
  const token = props.token
  const id = props.userId
  const url = `${baseUrl}/users/${id}/active_time`
  const renderedTime = new Date();
  console.log(`Time Component Rendered: ${renderedTime}`)

  async function sendRequest(url, data, token) {
    try {
      const response = await axios.post(url, data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function sendTime(minutes) {
    const data = { active_time: minutes }
    sendRequest(url, data, token);
  }

  const useUnload = (fn) => {
    const cb = useRef(fn);
    useEffect(() => {
      const onUnload = cb.current;
      window.addEventListener('beforeunload', onUnload);
      return () => {
        console.log('useUnload called');
        window.removeEventListener('beforeunload', onUnload)
      };
    }, [cb])
  }

  useUnload(e => {
    e.preventDefault();
    const exitTime = new Date();
    console.log(`${exitTime} is the time when useUnload hook is triggered`)
    const minutes = Math.ceil((exitTime - renderedTime) / 60000)
    sendTime(minutes)
    console.log("active time sent")
  })
}
