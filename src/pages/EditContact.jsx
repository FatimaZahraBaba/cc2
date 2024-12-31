import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function EditContact() {
  const {id} = useParams(); 
  const navigate = useNavigate();

  const updateContact = async (contact) => {
    const url = `/contacts/${id}`;
    const resp = await axios.put(url, contact);
    navigate('/');
  }

    
  return (
    <>
      <ContactForm onSubmit={updateContact} />
    </>
  )
}

export default EditContact