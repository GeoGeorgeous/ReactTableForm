/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.sass';

function Form({ createNewItem }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [color, setColor] = useState('');
  const [contact, setContact] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCheckBox = (e) => {
    const { value } = e.target;
    if (e.target.checked) {
      setContact([...contact, value]);
    } else {
      setContact(contact.filter((a) => a !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      surname,
      age,
      email,
      color,
      contact,
    };
    createNewItem(newItem);
    // clean Form
    document.querySelector('#form').reset();
    // clean states
    setName('');
    setSurname('');
    setAge();
    setEmail('');
    setColor('');
    setContact([]);
  };

  useEffect(() => {
    // Array of all form inputs
    const formInputs = [].slice.call(document.querySelector('#form').elements);
    // Form is invalid by default
    let isFormValid = false;
    // Checkbox must be choosen
    const isCheckboxValid = contact.length > 0;
    // Check if all is valid
    isFormValid = formInputs.every((input) => input.validity.valid);
    // toggle the button depending on the validity of the form
    if (isFormValid && isCheckboxValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, surname, age, email, color, contact]);

  return (
    <div className='form'>
      <h3 className='form__title'>Add new Person</h3>
      <form
        className='form__form'
        id='form'
      >
        <label className='form__label'>
          Name
          <input
            className='form__input'
            type='text'
            minLength='2'
            maxLength='120'
            required
            placeholder='John'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className='form__label'>
          Surname
          <input
            className='form__input'
            type='text'
            minLength='2'
            maxLength='120'
            required
            placeholder='Doe'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label className='form__label'>
          Age
          <input
            min='1'
            max='120'
            maxLength='3'
            className='form__input'
            required
            type='number'
            placeholder='27'
            value={age || ''}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label
          className='form__label'
          htmlFor='custom-email'
        >
          Email
          <input
            id='custom-email'
            className='form__input form__input_email'
            required
            type='email'
            placeholder='email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Favorite color</legend>

          <input
            name='color'
            id='red'
            className='form__radio-input'
            type='radio'
            value='Red'
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className='form__radio-label'
            htmlFor='red'
          >
            Red
          </label>

          <input
            name='color'
            className='form__radio-input'
            type='radio'
            id='green'
            value='Green'
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className='form__radio-label'
            htmlFor='green'
          >
            Green
          </label>

          <input
            name='color'
            className='form__radio-input'
            type='radio'
            value='Blue'
            id='blue'
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className='form__radio-label'
            htmlFor='blue'
          >
            Blue
          </label>

          <input
            name='color'
            className='form__radio-input'
            type='radio'
            value='White'
            id='white'
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className='form__radio-label'
            htmlFor='white'
          >
            White
          </label>

          <input
            name='color'
            className='form__radio-input'
            type='radio'
            id='black'
            value='Black'
            onChange={(e) => setColor(e.target.value)}
          />
          <label
            className='form__radio-label'
            htmlFor='black'
          >
            Black
          </label>
        </fieldset>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Contact preference</legend>

          <input
            name='contact'
            id='phone'
            className='form__radio-input'
            type='checkbox'
            value='Phone Call'
            checked={contact.includes('Phone Call')}
            onChange={(e) => handleCheckBox(e)}
          />
          <label
            className='form__radio-label'
            htmlFor='phone'
          >
            Phone Call
          </label>

          <input
            name='contact'
            className='form__radio-input'
            type='checkbox'
            id='email'
            value='Email'
            checked={contact.includes('Email')}
            onChange={(e) => handleCheckBox(e)}
          />
          <label
            className='form__radio-label'
            htmlFor='email'
          >
            Email
          </label>

          <input
            name='contact'
            className='form__radio-input'
            type='checkbox'
            value='SMS'
            id='SMS'
            checked={contact.includes('SMS')}
            onChange={(e) => handleCheckBox(e)}
          />
          <label
            className='form__radio-label'
            htmlFor='SMS'
          >
            SMS
          </label>
        </fieldset>
      </form>

      <Button
        icon='submit-form'
        iconOnHover
        text='Add to Table'
        isSubmitBtn
        onClick={handleSubmit}
        disabled={buttonDisabled}
      />
    </div>
  );
}

Form.propTypes = {
  createNewItem: PropTypes.func.isRequired,
};

export default Form;
