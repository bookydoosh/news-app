import React, { useState } from 'react';
import { IUserInput } from '../../Common/interfaces'

import { Button, TextField } from '@material-ui/core';

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

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
               
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }
    
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
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            
    </div>
}

export default SearchBar