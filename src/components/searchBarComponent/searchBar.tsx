import React, { useState } from 'react';
import { IUserInput } from '../../Common/interfaces'

import {  TextField } from '@material-ui/core';

import './searchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {


    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);

   
    
    return <div className="SearchBarContainer">
       
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
                
            
    </div>
}

export default SearchBar