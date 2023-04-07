import React, { useState } from 'react';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  function handlePhoneNumberChange(event) {
    const inputValue = event.target.value.replace(/\D/g, '');
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  }

  function formatPhoneNumber(value) {
    let formattedValue = value;
    if (value.length >= 4) {
      formattedValue = `(${value.slice(0, 3)})${value.slice(3)}`;
    }
    if (value.length >= 7) {
      formattedValue = `${formattedValue.slice(0, 8)}-${formattedValue.slice(8)}`;
    }
    return formattedValue;
  }

  return (
    <div className='input'>
      <input
      type="tel"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      placeholder="(123)456-7890"
      />
    </div>
  );
}

export default App