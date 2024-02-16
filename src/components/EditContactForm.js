import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const EditContactForm = ({ editName, setEditName, editEmail, setEditEmail, contacts, handleEditContact })=>{
    const { id } = useParams()
    const contact = contacts.find((contact) => contact.id.toString() === id)
    console.log("trying to edit contact form")

    useEffect(() =>{
        if(contact){
            setEditName(contact.name)
            setEditEmail(contact.email)
        }  
    }, [contact, setEditName, setEditEmail ])

    return(
        <form id="edit-contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Edit Contact Form</h2>
            <label name="name">Name</label>
            <input
                type="text"
                placeholder="Enter your name" 
                required 
                name="name" 
                value={editName} 
                onChange={(e)=>setEditName(e.target.value)} 
            />

            <label name="email">Email</label>
            <input
                type="email" 
                placeholder="Enter your email"
                required
                name="email"
                value={editEmail}
                onChange={(e) =>setEditEmail(e.target.value)}
            />

            <button onClick={()=> handleEditContact(id)}>Update Contact</button>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </form>
    ) 
}

export default EditContactForm
