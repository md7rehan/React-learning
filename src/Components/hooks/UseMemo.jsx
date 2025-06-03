import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const res = useMemo(() => {
    console.log('using memo fuction...');
    for (let i = 0; i < 1000000; i++) { }
    return count *2;
  }, [count]);


  return (
    <div className=''>
      <h1>result: {res}</h1>
      <button className='border m-1' onClick={() => setCount(count + 1)}>inc</button>
      <button className='border m-1' onClick={() => setOther(other + 1)}>other</button>
    </div>
  )
}
export default UseMemo