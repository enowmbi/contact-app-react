const NewContactForm = ({name, email, setName, setEmail, handleAddContact})=>{
 return(
   <form id="new-contact-form" onSubmit={(e) => handleAddContact(e)}>
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
     </form>
 ) 
}

export default NewContactForm
