import ContactTableRow from "../components/ContactTableRow"

const ContactTable = ({contacts, handleEditContact, handleDeleteContact})=>{
return(
    <table>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Actions</th>
    </tr>
      {contacts.map((contact) =>{
          return(
              <ContactTableRow 
               contact={contact}
               handleEditContact={handleEditContact}
               handleDeleteContact={handleDeleteContact}
              />
          )
      })}
    </table>
)
}

export default ContactTable
