const NewContactForm = ({name, email, setName, setEmail, handleAddContact})=>{
 return(
   <form onSubmit={(e) => handleAddContact(e)}>
     <label name="name">Name</label>
     <br/>
     <input
         type="text"
         placeholder="Enter your name" 
         required 
         name="name" 
         value={name} 
         onChange={(e)=>setName(e.target.value)} 
     />
     <br/>
     <label name="email">Email</label>
     <br/>
     <input
         type="email" 
         placeholder="Enter your email"
         required
         name="email"
         value={email}
         onChange={(e) =>setEmail(e.target.value)}
     />
     <br/>
     <button>Add Contact</button>
     </form>
 ) 
}

export default NewContactForm
