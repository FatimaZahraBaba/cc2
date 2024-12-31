import React, { useEffect, useState } from 'react'
import ContactList from '../components/ContactList' 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const getContacts = async () => {
    try {
      const url = '/contacts'; 
      const resp = await axios.get(url);
      setContacts(resp.data);
    } catch (e) {
      console.log(`Erreur lors de la reccuperation des donnees : ${e}`);
    }
  }
  useEffect(() => {
    getContacts();
  }, [])


  const handleDelete = (id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <>
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </>
  )
}

export default Home