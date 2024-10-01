import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
  ]);

  const [datarow, setDatarow] = useState(null); // To track the row being edited
  const [editdata, setEditdata] = useState({ name: "", age: "" }); // To hold the edited data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditdata({ ...editdata, [name]: value });
  };

  function handleClick(row) {
    if (datarow === row.id) {
      const updatedData = data.map((list) =>
        list.id === row.id ? editdata : list
      );
      setData(updatedData);
      setDatarow(null);
    } else {
      setDatarow(row.id);
      setEditdata(row);
    }
  }

  return (
    <>
      <table style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>
                {datarow === row.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editdata.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  row.name
                )}
              </td>
              <td>
                {datarow === row.id ? (
                  <input
                    type="text"
                    name="age"
                    value={editdata.age}
                    onChange={handleInputChange}
                  />
                ) : (
                  row.age
                )}
              </td>
              <td>
                <button onClick={() => handleClick(row)}>
                  {datarow === row.id ? "Update" : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;