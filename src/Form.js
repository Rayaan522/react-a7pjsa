import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
    console.log(value, 'value');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.name,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response, 'res'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />{' '}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
