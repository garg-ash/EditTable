import React, { useState } from 'react'
// import EditIcon from '@mui/icons-material/Edit';

const Table = () => {
    const[data, setData] = useState([
        { id: 1, firstName: "John", lastName: "Doe", age: 28 },
        { id: 2, firstName: "Jane", lastName: "Smith", age: 34 },
    ])

   const [editRow, setEditRow] = useState(null)
   const [editedData, setEditedData] = useState({firstName: "", lastName: "", age: ""})

   async function sendDataToApi(newRow) {
    try {
      const response = await fetch("https://example.com/api/data", {
        method: "POST", // Change this to "PUT" if updating
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify(newRow), // Send data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to send data to API");
      }

      const result = await response.json(); // Get response from the server
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
   const handleEditClick = (row)=>{
    if(editRow === row.id) {
        const updatedData = data.map((item)=>{
            item.id === row.id ? editedData : item
        })
        setData(updatedData)
        setEditRow(null)
    }else{
        setEditRow(row.id)
        setEditedData(row)
    }
   }

   const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setEditedData({...editedData, [name]: value})
   }

  return (
    <>
    <div className="container">
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
                <thead>
                    <tr >
                        {/* <th>S.No.</th> */}
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>{
                            return <tr key={index}>
                                <td>
                                    {editRow === row.id ? (
                                        <input type="text" value={editedData.firstName} onChange={handleInputChange} />
                                    ): (
                                        row.firstName
                                    )}
                                </td>

                                <td>
                                    {editRow === row.id ? (
                                        <input type="text" value={editedData.lastName} onChange={handleInputChange} />
                                    ) : (
                                        row.lastName
                                    )}
                                </td>

                                <td>
                                    {editRow === row.id ? (
                                        <input type="text" value={editedData.age} onChange={handleInputChange} />
                                    ): (
                                        row.age
                                    )}
                                </td>

                                <td>
                                    <button onClick={()=> handleEditClick()}>
                                        {editRow === row.id ? "Update" : "Edit"}
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
    </>
  )
}

export default Table