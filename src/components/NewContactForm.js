import { Link } from 'react-router-dom'

const NewContactForm = ({name, email, setName, setEmail, handleAddContact})=>{
    return(
           <form id="new-contact-form" onSubmit={(e) => handleAddContact(e)}>
                 <h2>New Contact Form</h2>
                 <label name="name">Name</label>
                 <input
                     type="text"
                     placeholder="Enter your name" 
                     required 
                     name="name" 
                     value={name} 
                     onChange={(e)=>setName(e.target.value)} 
                 />
                 <label name="email">Email</label>
                 <input
                     type="email" 
                     placeholder="Enter your email"
                     required
                     name="email"
                     value={email}
                     onChange={(e) =>setEmail(e.target.value)}
                 />
                 <button>Add Contact</button>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
           </form>
         ) 
}

export default NewContactForm
