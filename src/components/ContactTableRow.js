import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactTableRow = ({contact, handleEditContact, handleDeleteContact})=>{
    return(
        <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td><Link to={`/contact/${contact.id}/edit`}>{<FaPencilAlt role="button" tabIndex="0" />}</Link></td>
            <td>{<FaTrashAlt role="button" tabIndex="1" onClick={() => handleDeleteContact(contact.id)} />}</td>
        </tr>
    )
}

export default ContactTableRow
