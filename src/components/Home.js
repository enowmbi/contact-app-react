import SearchContacts from  "../components/SearchContacts"
import ContactTable from  "../components/ContactTable"

const Home  = ({ searchText, setSearchText, contacts, handleEditContact, handleDeleteContact }) => {
    return(
        <section>
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
