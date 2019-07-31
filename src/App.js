import React, { useState } from 'react'

function App() {
  const [isDragging, setDragging] = useState(false)

  const allowDrop = e => {
    console.log('in allowDrop')
    setDragging(true)
    e.preventDefault()
  }

  const drag = e => {
    console.log('in here', e)
    return e.dataTransfer.setData("text", e.target.id)
  }

  const drop = e => {
    e.preventDefault()
    setDragging(false)
    var data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
  }

	return (
		<div className='app-container'>
			<h1>Dragon Drop</h1>
      <div className='container'>
        {isDragging && <img src='dragon-animated1.gif' />}
        <img id='drag1' src='dragon.png' draggable='true' onDragStart={e => drag(e)} />
        <div id='div1' className='drop-box' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}></div>
      </div>
		</div>
	)
}

export default App
