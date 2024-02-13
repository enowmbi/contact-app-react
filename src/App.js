import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import NewContactForm from './components/NewContactForm'
import Home from './components/Home'
import Footer from './components/Footer'
import {v4 as uuidv4} from 'uuid'
import { Routes, Route } from 'react-router-dom'

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [searchText, setSearchText] = useState("")
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

    const handleEditContact = (id) => {
        const contact = contacts.find((contact) => id === contact.id)
        // setName(contact.name)
        // setEmail(contact.email)
        // const updatedContact = {id: id, name: name, email: email}
        // setContacts(contacts.map((contact) => contact.id === id ? {...updatedContact} : contact))
        // setName("")
        // setEmail("")
        console.log("calling handle edit")
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
      // fetchUsers()
    },[])


  return (
    <div className="App">
      <Header
          title={"Contact Management"}
      />

      <main>
          <Routes>
              <Route 
                  path="/"
                  element={<Home
                            contacts={contacts}
                            searchText={searchText}
                            setSearchText={setSearchText}
                          />
                      } 
              />

              <Route 
                  path="/contacts/new"
                  element={<NewContactForm
                              name={name}
                              email={email}
                              setName={setName}
                              setEmail={setEmail}
                              handleAddContact={handleAddContact} 
                          />
                     } 
              />
          </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
