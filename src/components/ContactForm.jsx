import React, { useState } from 'react'

function ContactForm({initialData = {}, onSubmit}) {
  // const [nom, setNom] = useState('');
  // const [email, setEmail] = useState('');
  // const [numTel, setNumTel] = useState('');
  const [contact, setContact] = useState({nom : '', email : '', numTel : '', ...initialData});

  const handleSubmit = (e) => {
    e.prevent.default();
    if(!contact.nom || !contact.email || !contact.numTel ) {
      alert('Le champ ne peut pas être vide ou contenir uniquement des espaces.');
      return;
    } else {
      onSubmit(contact);
    }
  }


  return (
    <>
      <form>
        <input type="text" value={nom} onChange={(e) => setContact({...contact, nom : e.target.value})} placeholder='Nom'/>
        <input type="email" value={email} onChange={(e) => setContact({...contact, email : e.target.value})} placeholder='Email'/>
        <input type="tel" value={numTel} onChange={(e) => setContact({...contact, numTel : e.target.value})} placeholder='Numero de telephone'/>
        <button onClick={handleSubmit}>Soumettre</button>
      </form>
    </> 
  )
}

export default ContactForm