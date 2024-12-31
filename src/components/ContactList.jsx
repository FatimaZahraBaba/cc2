import React from 'react'

function ContactList({contacts, onEdit, onDelete}) {

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
                <button onClick={() => onEdit(contact.id)}>Modifer</button>
                <button onClick={() => onDelete(contact.id)}>Supprimer</button>
              </td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default ContactList