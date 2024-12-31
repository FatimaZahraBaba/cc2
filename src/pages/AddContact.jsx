import React from 'react'
import ContactForm from '../components/ContactForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'  

function AddContact() {

    const navigate = useNavigate();
    const SubmitForm = async (contact) => {
      const url = '/contacts';
      const resp = await axios.post(url, contact);
      navigate('/');
    }

  return (
    <>
      <ContactForm onSubmit={SubmitForm} />
    </>
  )
}

export default AddContact