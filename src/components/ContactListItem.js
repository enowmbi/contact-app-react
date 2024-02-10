const ContactListItem = ({contact, handleDeleteContact})=>{
    return(
        <li key={contact.id}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            <hr/>
        </li>
    )
}

export default ContactListItem
