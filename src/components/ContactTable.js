import ContactTableRow from "../components/ContactTableRow"

const ContactTable = ({contacts, handleEditContact, handleDeleteContact})=>{
return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {contacts.map((contact) =>{
                  return(
                      <ContactTableRow 
                       key={contact.id}
                       contact={contact}
                       handleEditContact={handleEditContact}
                       handleDeleteContact={handleDeleteContact}
                      />
                  )
              })}
            </tbody>
        </table>
    )
}

export default ContactTable
