import React, { useState, useEffect } from 'react'

const DummyGet = () => {

  const [dummyResponse, setDummyResponse] = useState(null);
  const [dummyQueryPage1Response, setDummyQueryPage1Response] = useState(null);

  useEffect(() => {
    fetch('/api/dummy')
      .then(res => res.json())
      .then(data => setDummyResponse(data));

      fetch('/api/dummy?page=1')
      .then(res => res.json())
      .then(data => setDummyQueryPage1Response(data));
  }, []);

  return (
    <div>
      {dummyResponse?.data?.message}
      <br />
      {dummyQueryPage1Response?.data?.message}
      <br />
    </div>
  )
}

export default DummyGet