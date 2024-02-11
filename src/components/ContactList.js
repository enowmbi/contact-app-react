import ContactListItem from "../components/ContactListItem"

const ContactList = ({contacts, handleEditContact, handleDeleteContact})=>{
return(
   <ul style={{listStyle: "none"}}>
      {contacts.map((contact) =>{
          return(
              <ContactListItem 
               contact={contact}
               handleEditContact={handleEditContact}
               handleDeleteContact={handleDeleteContact}
              />
          )
      })}
    </ul>

)
}

export default ContactList
