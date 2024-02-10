import ContactListItem from "../components/ContactListItem"
const ContactList = ({contacts, handleDeleteContact})=>{
return(
   <ul style={{listStyle: "none"}}>
      {contacts.map((contact) =>{
          return(
              <ContactListItem 
               contact={contact}
               handleDeleteContact={handleDeleteContact}
              />
          )
      })}
    </ul>

)
}

export default ContactList
