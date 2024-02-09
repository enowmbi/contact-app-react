const ContactList = ({contacts, handleDeleteContact})=>{
return(
   <ul style={{listStyle: "none"}}>
      {contacts.map((contact) =>{
          return(
        <li key={contact.id}>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              <hr/>
        </li>
          )
      })}
    </ul>

)
}

export default ContactList
