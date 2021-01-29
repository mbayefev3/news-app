import React from "react";
import { Input } from "semantic-ui-react";

const Form = props => {
  return (
    <div>
      <Input
        type="search"
        id="search"
        name="search"
        onInput={props.handleSubmit}
        size="large"
        icon="search"
        placeholder="Search..."
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
};

export default Form;
