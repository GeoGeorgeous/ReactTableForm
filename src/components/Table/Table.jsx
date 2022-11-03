/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Button from '../Button/Button';
import './Table.sass';

function Table({ data, exportCallback, removeItem }) {
  function mapData() {
    return data.map((i) => (
      <tr
        className='table__item'
        key={Math.random()}
      >
        <td>{i.name}</td>
        <td>{i.surname}</td>
        <td>{i.email}</td>
        <td>{i.age}</td>
        <td>{i.color}</td>
        <td>{i.contact.join(', ')}</td>
        <td className='table__remove-button-cell'>
          <button
            type='button'
            className='table__remove-button'
            onClick={() => removeItem(i)}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className='table'>
      <h3 className='table__title'>Candidates</h3>
      {data.length > 0 && (
        <table className='table__table-data'>
          <thead>
            <tr>
              <th className='table__header'>Name</th>
              <th className='table__header'>Surname</th>
              <th className='table__header'>Email</th>
              <th className='table__header'>Age</th>
              <th className='table__header'>Color</th>
              <th className='table__header'>Contact preference</th>
              <th>
                <Button
                  icon='export'
                  iconOnHover
                  text='Export JSON'
                  isSubmitBtn
                  onClick={exportCallback}
                />
              </th>
            </tr>
          </thead>
          <tbody>{data.length > 0 && mapData()}</tbody>
        </table>
      )}
      {data.length <= 0 && <p className='table__no-data'>🚫 No Data</p>}
    </div>
  );
}

export default Table;
