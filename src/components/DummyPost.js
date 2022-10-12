import { useEffect, useState } from 'react';

const DummyPost = () => {
  const [dummyPostResponse, setDummyPostResponse] = useState(null);
  const [dummyPostWithRequestBodyResponse, setDummyPostWithRequestBodyResponse] = useState(null);
  const [dummyPostWithRequestBodyAndRequestParamResponse, setDummyPostWithRequestBodyAndRequestParamResponse] = useState(null)

  useEffect(() => {

      fetch('/api/dummy-post', {
        method: 'POST'
      })
      .then(res => res.json())
      .then(data => setDummyPostResponse(data));

      fetch('/api/dummy-post', {
        method: 'POST',
        body: JSON.stringify({ username: 'test' })
      })
      .then(res => res.json())
      .then(data => setDummyPostWithRequestBodyResponse(data));

      fetch('/api/dummy-post?login=true', {
        method: 'POST',
        body: JSON.stringify({ username: 'test' })
      })
      .then(res => res.json())
      .then(data => setDummyPostWithRequestBodyAndRequestParamResponse(data));
      
  }, []);


  return (
    <div>
      <br />
      {dummyPostResponse?.data?.message}
      <br />
      {dummyPostWithRequestBodyResponse?.data?.message}
      <br />
      {dummyPostWithRequestBodyAndRequestParamResponse?.data?.message}
      <br />
    </div>
  );
}

export default DummyPost;