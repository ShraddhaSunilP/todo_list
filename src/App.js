import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState([]);
  const [items, setItems] = useState({ id: 1, name: " " });

  const AddItem = (e) => {
    e.preventDefault();

    let arr = name;
    let isFlag = false;

    arr.map((t) => {
      if (t.id === items.id) {
        t.name = items.name;
        isFlag = true;
      }
    })

    if (!isFlag) {
      arr.push(items);
    }

    setName(arr);
    setItems({ id: arr.length + 1, name: " " })
  }

  const deleteData = (id) => {
    let arrtemp = [];

    name.map((t) => {

      if (t.id !== id) {
        arrtemp.push(t);
      }

    })

    setName(arrtemp);

    if (arrtemp.length === 0) {
      setItems({ id: 1, name: " " });
    }

  }

  return (
    <>
      <div>
        <input type="text" value={items.name} onChange={(e) => setItems({ id: items.id, name: e.target.value })} />
        <button onClick={AddItem}>AddItem</button>

        {name.length > 0 &&
          <table>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
                name.map((n, i) => (
                  <tr key={i}>
                    <td>{n.id}</td>
                    <td>{n.name}</td>
                    <td><button onClick={() => setItems(n)}>Edit</button></td>
                    <td><button onClick={(e) => deleteData(n.id)}>Delete</button></td>
                  </tr>
                  ))
              }
            </tbody>
          </table>
        }

      </div>
    </>
  )

}

export default App;
