import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'

const ContactTableRow = ({contact, handleEditContact, handleDeleteContact})=>{
    return(
        <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{<FaPencilAlt role="button" tabindex="0" onClick={() => handleEditContact(contact.id)} />}</td>
            <td>{<FaTrashAlt role="button" tabindex="1" onClick={() => handleDeleteContact(contact.id)} />}</td>
        </tr>
    )
}

export default ContactTableRow
