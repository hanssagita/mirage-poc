import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DummyGetWithAxios = () => {

  const [dummyResponseWithAxios, setDummyResponseWithAxios] = useState(null);

  useEffect(() => {
    axios.get('/api/dummy').then(res => {
      setDummyResponseWithAxios(res.data)
    })
  }, []);

  return (
    <div>
      <br />
      {dummyResponseWithAxios?.data?.message}
      <br />
    </div>
  )
}

export default DummyGetWithAxios