import React, { useState, useEffect } from 'react'

const DummyOtherDomain = () => {

  const [dummyOtherDomain, setDummyOtherDomainResponse] = useState(null);

  useEffect(() => {
    fetch('https://service.mock.com/dummy')
      .then(res => res.json())
      .then(data => setDummyOtherDomainResponse(data));
  }, []);

  return (
    <div>
      <br />
      {dummyOtherDomain?.data?.message}
      <br />
    </div>
  )
}

export default DummyOtherDomain