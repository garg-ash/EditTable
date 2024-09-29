import React, { useState } from "react";

function EditableTable() {
  
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
  ]);

  
  const [editRowId, setEditRowId] = useState(null);

  
  const [editedData, setEditedData] = useState({ name: "", age: "" });

  
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

  return (
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {data.map((row) => (
          <tr key={row.id}>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EditableTable;
