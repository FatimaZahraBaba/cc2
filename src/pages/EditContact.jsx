import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function EditContact() {
  const navigate = useNavigate();
  const {id} = useParams(); 
  const [contact, setContact] = useState(null);

  useEffect(async () => {
    const url = `/contacts/${id}`;
    const resp = await axios.get(url);
    setContact(resp.data);
  }, [id])

  const updateContact = async (contact) => {
    const url = `/contacts/${id}`;
    const resp = await axios.put(url, contact);
    navigate('/');
  }

    
  return (
    <>
      <ContactForm initialData={contact} onSubmit={updateContact} />
    </>
  )
}

export default EditContact