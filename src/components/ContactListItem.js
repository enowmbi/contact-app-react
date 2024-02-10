import {FaTrashAlt} from 'react-icons/fa'
const ContactListItem = ({contact, handleDeleteContact})=>{
    return(
        <li key={contact.id}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>

            <FaTrashAlt
                role="button" 
                tabindex="0" 
                onClick={() => handleDeleteContact(contact.id)}
                />
            <hr/>
        </li>
    )
}

export default ContactListItem
