import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class Gifts extends Component {
  state = {
    person: "",
    present: ""
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>
              Person
              <FormControl
                onChange={e => this.setState({ person: e.target.value })}
                className="input-person"
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Present
              <FormControl
                onChange={e => this.setState({ present: e.target.value })}
                className="input-present"
              />
            </label>
          </FormGroup>

          <Button
            className="btn-remove"
            onClick={() => {
              this.props.removeGift(this.props.gift.id);
            }}
          >
            Remove gift
          </Button>
        </Form>
      </div>
    );
  }
}
