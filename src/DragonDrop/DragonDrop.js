import React, { useState } from 'react'
import './styles.css'

export const DragonDrop = () => {
  const [isDragging, setDragging] = useState(false)

  const allowDrop = e => {
    e.preventDefault()
  }

  const onMouseDown = e => {
    setDragging(true)
  }

  const onMouseUp = e => {
    e.preventDefault()
    setDragging(false)
  }

  const onDragStart = e => {
    return e.dataTransfer.setData("text", e.target.id)
  }

  const drop = e => {
    e.preventDefault()
    setDragging(false)
    var data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data))
  }

	return (
    <div className='container'>
      <img
        height='200'
        id='drag1'
        className={`flat-dragon ${isDragging ? 'dragging' : ''}`}
        src={`${isDragging ? 'dragon-animated1.gif' : 'dragon.png'}`}
        draggable='true'
        onDragStart={e => onDragStart(e)}
        onMouseDown={e => onMouseDown(e)}
        />
      <div id='div1' className='drop-box' onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}></div>
    </div>
	)
}
