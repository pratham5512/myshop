import React from 'react'

function ConditionalRendering() {
    let loggedin = true;
    let msg;
    if(loggedin) {
        msg=<h1>Welcome to my Page</h1>
    } else {
        msg=<h1>Pls Register First</h1>
    }
  return (
    <div>
      {msg}
    </div>
  )
}

export default ConditionalRendering
