import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Add.module.css";
import classNames from "classnames";

function Add() {
  let [name, setName] = useState();
  let [age, setAge] = useState();

  const submit = () => {
    setAge("");
    setName("");
  };

  return (
    <Form className={classNames(styles.formContainer, "shadow-lg")}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter the username" value={name} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your age</Form.Label>
        <Form.Control type="number" value={age} min={0} placeholder="0" />
      </Form.Group>
      <Button variant="primary" onClick={submit}>
        Submit
      </Button>
    </Form>
  );
}

export default Add;
