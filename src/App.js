import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import NewContactForm from './components/NewContactForm'
import Footer from './components/Footer'

function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        setName("")
        setEmail("")
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
          handleSubmit={handleSubmit} 
      />

      <Footer />
    </div>
  );
}

export default App;
