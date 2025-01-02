import React from 'react'
import { Link } from 'react-router-dom';

function ContactList({contacts, onDelete}) {

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <table>
        {
          contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.nom}</td>
              <td>{contact.email}</td> 
              <td>{contact.numTel}</td>
              <td>
                <button onClick={() => handleEdit(contact.id)}>Modifer</button>
                {/* <button onClick={() => onDelete(contact.id)}>Supprimer</button> */}
                <Link to={`/edit/${contact.id}`}> Modifier </Link>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default ContactList