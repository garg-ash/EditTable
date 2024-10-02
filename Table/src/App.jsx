import React, { useState } from 'react'
import EditableTable from './EditableTable'


export const App = () => {
const [isOpen, setIsOpen] = useState(false)

function handleOpen(){
  console.log("submitted")
  setIsOpen(true)
}

function handleClose(){
  setIsOpen(false)
}

  return (
    <>
      <div>
        {!isOpen && (
          <button type='submit' onClick={handleOpen}>Open</button>
        )}

        {isOpen && (
        <button type='submit' onClick={handleClose}>close</button>
        )}
      </div>
      {isOpen && (
        <EditableTable/>
      )} 
    </>
  )
}
export default App
