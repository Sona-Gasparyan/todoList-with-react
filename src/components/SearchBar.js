import React from 'react'



const SearchBar = (props) => {

    return (
        <ul>
            <li>
                {props.searchedName}
                <span className="close" onClick={() => { props.removeSearched(props.searchedName) }}>×</span>
            </li>
        </ul>
    )

}


export default SearchBar
