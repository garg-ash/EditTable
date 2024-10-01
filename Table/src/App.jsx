import React, { useState } from 'react'
import EditableTable from './EditableTable'


export const App = () => {
const [isOpen, setIsOpen] = useState(false)

function handleOpen(){
  console.log("submitted")
  setIsOpen(!isOpen)
}

  return (
    <>
      <div>
        <button type='submit' onClick={handleOpen}>{!isOpen ? "Open" : "Close"}</button>

        {/* <button type='submit' onClick={handleSubmit}>{isOpen ? "close" : "open"}</button> */}
        {/* <button type='submit' onClick={handleClose}>Close</button> */}

      </div>
      {isOpen && (
        <EditableTable/>
      )} 
    </>
  )
}
export default App
