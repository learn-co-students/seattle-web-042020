import React, {Fragment} from 'react'

const SearchBar = (props) => {

    const handleChange = (e) => {
        props.updateSearchTerm(e.target.value)
    }

        return(
            <Fragment>
                <form>
                    <input type="text" name="searchTerm" value={props.searchTerm} onChange={handleChange}/>
                </form>
            </Fragment>
            )
    
}

export default SearchBar