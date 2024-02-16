import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import NewContactForm from './components/NewContactForm'
import EditContactForm from './components/EditContactForm'
import Home from './components/Home'
import Footer from './components/Footer'
import {v4 as uuidv4} from 'uuid'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{ 
        setContacts(JSON.parse(localStorage.getItem('contact-list')))
    },[])

    useEffect(()=>{
        const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchText.toLowerCase())
            || contact.email.toLowerCase().includes(searchText.toLowerCase()) )

        setSearchResults(filteredContacts)

    },[searchText, contacts])

    const handleAddContact =(e)=>{
        e.preventDefault()
        const newContact = {id: uuidv4(), name: name, email: email}
        const contactList =[...contacts, newContact]
        setContacts(contactList)
        localStorage.setItem('contact-list', JSON.stringify(contactList))
        setName("")
        setEmail("")
        navigate("/")
    }

    const handleEditContact = (id) => {
        const updatedContact = { id: id, name: editName, email: editEmail }
        const updatedContacts = contacts.map((contact) => contact.id.toString() === id ? { ...updatedContact } : contact )
        setContacts(updatedContacts)
        localStorage.setItem('contact-list', JSON.stringify(updatedContacts))
        setEditName("")
        setEditEmail("")
        navigate("/")
    }

    const handleDeleteContact = (id) =>{
        const filteredContacts = contacts.filter((contact) => contact.id!==id)
        setContacts(filteredContacts)
        localStorage.setItem('contact-list', JSON.stringify(filteredContacts))
    }



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
                             contacts={searchResults}
                             searchText={searchText}
                             setSearchText={setSearchText}
                             handleEditContact={handleEditContact}
                             handleDeleteContact={handleDeleteContact}
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

              <Route 
                  path="/contacts/:id/edit"
                  element={<EditContactForm
                              editName={editName}
                              editEmail={editEmail}
                              setEditName={setEditName}
                              setEditEmail={setEditEmail}
                              contacts={contacts}
                              handleEditContact={handleEditContact} 
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
