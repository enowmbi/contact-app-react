const SearchContacts = ({searchText, setSearchText}) => {
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
                id="search-contacts"
                type="text" 
                value={searchText}
                placeholder="Search Contact or Email"
                onChange={(e)=>setSearchText(e.target.value)}
            />
        </form>
    )
}

export default SearchContacts
