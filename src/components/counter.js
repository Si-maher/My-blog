import React, { useState } from "react"

const counter = () => {
  // Setting the default value
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <h3>Click the button if you like the post</h3>
      <h3>likes</h3>
      {/* We don't want the setCount to run straight away,only when we click the button */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default counter
