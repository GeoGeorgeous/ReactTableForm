/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../Button/Button';
import './Form.sass';

function Form() {
  return (
    <div className='form'>
      <h3 className='form__title'>Add new Person</h3>
      <form className='form__form'>
        <label className='form__label'>
          Name
          <input
            className='form__input'
            type='text'
            minLength='2'
            maxLength='120'
            required
            placeholder='John'
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
          />
        </label>
        <label className='form__label'>
          Age
          <input
            min='18'
            max='130'
            maxLength='3'
            className='form__input'
            required
            type='number'
            placeholder='27'
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
          />
        </label>
        <fieldset className='form__fieldset'>
          <legend className='form__legend'>Favorite color</legend>

          <input
            name='color'
            id='red'
            className='form__radio-input'
            type='radio'
            value='red'
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
            value='green'
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
            value='blue'
            id='blue'
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
            value='white'
            id='white'
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
            value='black'
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
            value='phone'
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
            value='email'
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
        iconOnHover='true'
        text='Add to Table'
        isSubmitBtn='true'
      />
    </div>
  );
}

export default Form;
