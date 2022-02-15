import React from "react"
import {InputGroup,Button,FormControl} from 'react-bootstrap';

const Search = () => {
    return(
        <InputGroup className="mb-5">
            <Button variant="outline-light" id="button-addon1">
            Search
            </Button>
            <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            className="p-2 bg-dark text-white bg-opacity-75"
            />
        </InputGroup>
    );
}
export default Search;