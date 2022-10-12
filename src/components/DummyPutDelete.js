import { useEffect, useState } from 'react';

const DummyPutDelete = () => {
  const [dummyPutResponse, setDummyPutResponse] = useState(null);
  const [dummyDeleteResponse, setDummyDeleteResponse] = useState(null);

  useEffect(() => {

      fetch('/api/dummy-put', {
        method: 'PUT'
      })
      .then(res => res.json())
      .then(data => setDummyPutResponse(data));

      fetch('/api/dummy-delete', {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => setDummyDeleteResponse(data));

  }, []);


  return (
    <div className="App">
      <br />
      {dummyPutResponse?.data?.message}
      <br />
      {dummyDeleteResponse?.data?.message}
      <br />
    </div>
  );
}

export default DummyPutDelete;