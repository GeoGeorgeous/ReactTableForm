import React, { useState } from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import Popup from '../Popup/Popup';
import './App.sass';

function App() {
  const [data, setData] = useState([]);
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);

  const exportCallback = () => {
    setIsPopUpShown(true);
    setPopupType('json');
  };

  const createNewItem = (item) => {
    setData([...data, item]);
  };

  const removeItem = (item) => {
    setSelectedItem(item);
    setPopupType('delete');
    setIsPopUpShown(true);
  };

  const handleDelete = () => {
    setData(data.filter((d) => d !== selectedItem));
    setSelectedItem('');
    setIsPopUpShown(false);
  };

  const handlePopUpClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setIsPopUpShown(false);
    }
  };

  return (
    <>
      <Table
        data={data}
        exportCallback={exportCallback}
        removeItem={removeItem}
      />
      <Form createNewItem={createNewItem} />
      <Popup
        isShown={isPopUpShown}
        handlePopUpClick={handlePopUpClick}
        data={data}
        selectedItem={selectedItem}
        popupType={popupType}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
