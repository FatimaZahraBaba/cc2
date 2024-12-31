import React, { useState } from 'react'

function ContactForm({onSubmit}) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [numTel, setNumTel] = useState('');

  const handleSubmit = (e) => {
    e.prevent.default();
    onSubmit({nom, email, numTel});
  }

  return (
    <>
      <form>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder='Nom'/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input type="tel" value={numTel} onChange={(e) => setNumTel(e.target.value)} placeholder='Numero de telephone'/>
        <button onClick={handleSubmit}>Soumettre</button>
      </form>
    </> 
  )
}

export default ContactForm