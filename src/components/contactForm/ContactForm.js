import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={name}
      onChange={({target}) => {setName(target.value)}}
      placeholder="Name"
      required
    />
    <input 
      type="tel"
      value={phone}
      pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
      onChange={({target}) => {setPhone(target.value)}}
      placeholder="Phone Number"
      required
    />
    <input 
      type="email"
      value={email}
      onChange={({target}) => {setEmail(target.value)}}
      placeholder="Email"
      required
    />
    <input
      type="submit"
    />
  </form>
  );
};
