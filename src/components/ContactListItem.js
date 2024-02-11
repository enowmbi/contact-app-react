import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'

const ContactListItem = ({contact, handleEditContact, handleDeleteContact})=>{
    return(
        <li key={contact.id}>
        <article>
            <div>{contact.name}</div>
            <div>{contact.email}</div>

            <FaPencilAlt
                role="button" 
                tabindex="0" 
                onClick={() => handleEditContact(contact.id)}
            />

            <FaTrashAlt
                role="button" 
                tabindex="1" 
                onClick={() => handleDeleteContact(contact.id)}
            />
        </article>
        <hr/>
        </li>
    )
}

export default ContactListItem
