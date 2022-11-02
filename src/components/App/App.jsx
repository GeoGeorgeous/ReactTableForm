import React, { useState } from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import './App.sass';

function App() {
  const [data, setData] = useState([]);

  const exportCallback = () => {
    alert(JSON.stringify(data));
  };

  const createNewItem = (item) => {
    setData([...data, item]);
  };

  const removeItem = (item) => {
    setData(data.filter((d) => d !== item));
  };
  return (
    <>
      <Table
        data={data}
        exportCallback={exportCallback}
        removeItem={removeItem}
      />
      <Form createNewItem={createNewItem} />
    </>
  );
}

export default App;
