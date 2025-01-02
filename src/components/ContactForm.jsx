import React, { useState } from 'react'

function ContactForm({initialData = {}, onSubmit}) {
  // const [nom, setNom] = useState('');
  // const [email, setEmail] = useState('');
  // const [numTel, setNumTel] = useState('');
  const [contact, setContact] = useState({nom : '', email : '', numTel : '', ...initialData});

  const handleSubmit = (e) => {
    e.prevent.default();
    // if(!contact.nom || !contact.email || !contact.numTel ) {
    //   alert('Le champ ne peut pas être vide ou contenir uniquement des espaces.');
    //   return;
    // } else {
      onSubmit(contact);
    // }
  }


  return (
    <>
      <form>
        <input type="text" value={contact.nom} onChange={(e) => setContact({...contact, nom : e.target.value})} placeholder='Nom'/>
        { !contact.nom && <span>le champ "Nom" est obligatoire</span> }
        <input type="email" value={contact.email} onChange={(e) => setContact({...contact, email : e.target.value})} placeholder='Email'/>
        { !contact.email && <span>le champ "Email" est obligatoire</span>}
        <input type="tel" value={contact.numTel} onChange={(e) => setContact({...contact, numTel : e.target.value})} placeholder='Numero de telephone'/>
        { !contact.numTel && <span>le champ "Numero de telephone" est obligatoire</span>}
        <button onClick={handleSubmit} disabled={!contact.nom || !contact.email || !contact.numTel}>Soumettre</button>
      </form>
    </> 
  )
}

export default ContactForm