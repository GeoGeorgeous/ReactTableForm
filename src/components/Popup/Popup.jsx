/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Button from '../Button/Button';
import './Popup.sass';

function Popup({
  isShown,
  data,
  handlePopUpClick,
  popupType,
  selectedItem,
  handleDelete,
}) {
  return (
    isShown && (
      <div
        className='overlay'
        onClick={handlePopUpClick}
      >
        <div className='popup'>
          {popupType === 'json' && (
            <>
              <h3 className='popup__title'>JSON Export</h3>
              <div className='popup__content'>
                <pre className='popup__code'>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            </>
          )}
          {popupType === 'delete' && (
            <>
              <h3 className='popup__title'>
                Are you shure you want to delete{' '}
                <b>
                  {selectedItem.name} {selectedItem.surname}
                </b>{' '}
                from the table?
              </h3>
              <Button
                icon='delete'
                iconOnHover='true'
                text='Delete'
                isSubmitBtn='false'
                onClick={handleDelete}
                disabled={false}
              />
            </>
          )}
        </div>
      </div>
    )
  );
}

export default Popup;
