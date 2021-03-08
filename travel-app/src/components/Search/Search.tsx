
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.scss'
import {Button, Form, FormControl} from "react-bootstrap"

const Search = () => {

    return (
       <Form inline>
           <FormControl 
           type="text"
           placeholder="Search"
           className="mr-sm-2"
           />
            <Button variant="outline-info">
                Search
            </Button>
       </Form>
    );
};

export default Search;
