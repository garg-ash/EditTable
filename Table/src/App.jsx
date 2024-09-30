import React, { useState } from "react";

function EditableTable() {
  
  const [data, setData] = useState([
    // { id: 1, name: "Aviyansh", age: 28 },
    // { id: 2, name: "Ashish", age: 26 },
  ]);

  
  const [editRowId, setEditRowId] = useState();
  const [editedData, setEditedData] = useState(); 
  const [newname, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')


  
  function handleEditClick(row) {
    
    if (editRowId === row.id) {
      
      const updatedData = data.map((item) =>
        item.id === row.id ? editedData : item
      );
      setData(updatedData); 
      setEditRowId(null);
    } else {
      setEditRowId(row.id);
      setEditedData(row); 
    }
  }

  
  function handleInputChange(event) {
    const { name, value } = event.target; 
    setEditedData({ ...editedData, [name]: value }); 
  }

 function handleAddRow(e){
  e.preventDefault()
  
  const newRow = {
    id: data.length+1,
    name: newname,
    age : parseInt(newAge)
  }
  setData([newRow,  ...data])

  setNewAge('')
  setNewName('')

 }

  function handleDelete(id){
    const deletedData = data.filter((item)=> item.id !== id)
    setData(deletedData)
  }

  return (
<>
    <h5>Add New Data</h5>
    <form action="" onSubmit={handleAddRow}>
      <input type="text" placeholder="Enter Name" value={newname} onChange={(e)=> setNewName(e.target.value)} />
      <input type="text" placeholder="Enter Age" value={newAge} onChange={(e)=> setNewAge(e.target.value)} />
      <button type="submit">Add Data</button>
    </form>

    <h5>Table Data</h5>
<table border="1" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {data.map((row, index) => (
          <tr key={index}>
            <td>             
              {editRowId === row.id ? (
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                />
              ) : (               
                row.name
              )}
            </td>
            <td>
              {editRowId === row.id ? (
                <input
                  type="text"
                  name="age"
                  value={editedData.age}
                  onChange={handleInputChange}
                />
              ) : (
                row.age
              )}
            </td>
            <td>
              <button onClick={() => handleEditClick(row)}>
                {editRowId === row.id ? "Update" : "Edit"}
              </button>

              <button onClick={()=> handleDelete(row.id)}>Delete</button>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
</>
  );
}

export default EditableTable;