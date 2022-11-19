import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const UserDetail = ({ values, handleChange, handleNext , validated }) => {

  return (
      <div className="container">
        <div className="formbox fadein mx-auto col-xl-6">
          <Form className="formName d-flex flex-column justify-content-around" noValidate validated={validated} onSubmit={handleNext}>
            <p className="mx-auto">พอจะบอกชื่อคุณได้ไหม ?</p>
            <Form.Group className="inputnamebox">
              <Form.Control
                required
                defaultValue={values.Name}
                onChange={handleChange("Name")}
                type="text"
                placeholder="Name"
                className="inputName"
              />
              <Form.Control.Feedback type="invalid">
                Please input a Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="btnNext text-center mx-auto" type="submit">ต่อไป <FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
          </Form>
        </div>
      </div>
  );
};

export default UserDetail;
