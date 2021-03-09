
import 'bootstrap/dist/css/bootstrap.min.css';
import './Localization.scss'
import {Form} from "react-bootstrap"

const Localization = () => {

    return (
        <Form inline>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Control as="select" custom>
            <option>en</option>
            <option>ru</option>
            <option>be</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
};

export default Localization;
