import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import NewContactForm from './components/NewContactForm'
import ContactList from './components/ContactList'
import Footer from './components/Footer'
import {v4 as uuidv4} from 'uuid'

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contact-list')) || [])

    const handleAddContact =(e)=>{
        e.preventDefault()
        const newContact = {id: uuidv4(), name: name, email: email}
        const contactList =[...contacts, newContact]
        setContacts(contactList)
        localStorage.setItem('contact-list', JSON.stringify(contactList))
        setName("")
        setEmail("")
    }

    const handleDeleteContact = (id) =>{
        const filteredContacts = contacts.filter((contact) => contact.id!==id)
        setContacts(filteredContacts)
        localStorage.setItem('contact-list', JSON.stringify(filteredContacts))
    }

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setContacts(data)
    }

    useEffect(()=>{
      fetchUsers()
    },[])

    


  return (
    <div className="App">
      <Header
          title={"Contact Management"}
      />

      <main>
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
