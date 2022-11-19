import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Age = ({ values, handleChange, handleNext, validated }) => {
  return (
    <div className="container">
      <div className="formbox fadein mx-auto col-xl-6">
        <Form
          className="form-age d-flex flex-column justify-content-around"
          noValidate
          validated={validated}
          onSubmit={handleNext}
        >
          <p className="text-center">ตอนนี้คุณอายุเท่าไหร่ ?</p>
          <Form.Group className="inputagebox">
            <Form.Control
              required
              defaultValue={values.Age}
              onChange={handleChange("Age")}
              type="number"
              placeholder="Age"
              className="inputAge"
              min="0"
              max="100"
            />
            <Form.Control.Feedback type="invalid">
              Please input an Age.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="btnNext text-center mx-auto" type="submit">
            ต่อไป <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Age;
