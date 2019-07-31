import React from 'react'

function App() {

	return (
		<div className='App'>
			<h1>Dragon Drop</h1>
      <div className='container'>
        <img id='drag1' src='dragon-animated1.gif' draggable='true' />
        <div id='div1' className='drop-box'></div>
      </div>
		</div>
	)
}

export default App
