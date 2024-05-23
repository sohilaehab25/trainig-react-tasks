import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function PropsInfo(props) {
  const [validated, setValidated] = useState(false);


  //************try onClick handler******/

  // const submitHandler = ()=>{
  //   console.log("hi from the other world")
  // }

  //********************************try sending fundion from parent to child  */
  // const {onsayhello} = props;
  const { onthe_hell,children} = props;
  
  // const clickHandler = () =>{
  //     onsayhello()
  // }

  const ClickHandler = () =>{
    onthe_hell()
  }

  //*********try onChange handler***********/
  const handlerChange = (event) =>{
    console.log(event.target.value)
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label >First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            onChange={handlerChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
        {/* shared data from patent to child */}

            <Form.Group>
            {children}

            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
    
    {/* call through function in this component  */}
      {/* <Button type="submit" onClick={clickHandler}>Submit form</Button> */}
      {/* <Button type="submit" onClick={ClickHandler}>Submit form</Button> */}

      {/* ************************************************************************************************************ */}

      {/* call through the function in the parent component */}
      {/* <Button type="submit" onClick={()=>onsayhello()}>Submit form</Button> */}
      <Button type="submit" onClick={()=>onthe_hell()}>Submit form</Button>
    </Form>
  );
}

export default PropsInfo;