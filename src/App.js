import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import NewContactForm from './components/NewContactForm'
import ContactList from './components/ContactList'
import Footer from './components/Footer'

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Enow Mbi",
            email: "benowmbi@gmail.com"
        },
        {
            id: 2,
            name: "Fombo Anita",
            email: "fombo_anita@gmail.com"
        }
    ])

    const handleAddContact =(e)=>{
        e.preventDefault()
        const newContact = {id: 3, name: name, email: email}
        setContacts([...contacts, newContact])
        setName("")
        setEmail("")
    }

    const handleDeleteContact = (id) =>{
        const filteredContacts = contacts.filter((contact) => contact.id!==id)
        setContacts(filteredContacts)
    }


  return (
    <div className="App">
      <Header
          title={"Contact Management"}
      />

      <NewContactForm
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
          handleAddContact={handleAddContact} 
      />

      <ContactList
       contacts={contacts}
       handleDeleteContact={handleDeleteContact}
      />

      <Footer />
    </div>
  );
}

export default App;
