/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Button from '../Button/Button';
import './Table.sass';

function Table() {
  return (
    <div className='table'>
      <h3 className='table__title'>Candidates</h3>
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
                iconOnHover='true'
                text='Export JSON'
                isSubmitBtn='true'
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='table__item'>
            <td>Georgii</td>
            <td>Gorchev</td>
            <td>georgegorchev@yandex.com</td>
            <td>26</td>
            <td>Black</td>
            <td>Email, SMS</td>
            <td className='table__remove-button-cell'>
              <button
                type='button'
                className='table__remove-button'
              />
            </td>
          </tr>
          <tr className='table__item'>
            <td>Kirill</td>
            <td>Feduykov</td>
            <td>kirill@yandex.com</td>
            <td>25</td>
            <td>White</td>
            <td>Phone Call, Email, SMS</td>
            <td className='table__remove-button-cell'>
              <button
                type='button'
                className='table__remove-button'
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
