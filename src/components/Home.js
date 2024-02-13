import { Link } from 'react-router-dom'
import SearchContacts from  "../components/SearchContacts"
import ContactTable from  "../components/ContactTable"

const Home  = ({ searchText, setSearchText, contacts, handleEditContact, handleDeleteContact }) => {
    return(
        <section>
            <section id="list-lable-and-link">
                <h3>Contact List</h3>
                <Link id="add-contact-link" to="/contacts/new">Add Contact</Link>
            </section>
            <SearchContacts
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <hr id="main-divider"/>

            <ContactTable
                contacts={contacts}
                handleEditContact={handleEditContact}
                handleDeleteContact={handleDeleteContact}
        />
        </section>
    )
}

export default Home
