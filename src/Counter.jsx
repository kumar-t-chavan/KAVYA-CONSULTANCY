import React, { useState } from 'react'

const Counter = () => {
    const [text,settext] = useState("")
    const change = (e)=>{
        settext(e.target.value)
    }
  return (
    <div>
      
      <label htmlFor="username">Username : </label>
      <input type="text" onChange={change} />
      <h1>{text}</h1>
      <button onClick={()=>settext("")}>clear</button>
    </div>
  )
}

export default Counter
