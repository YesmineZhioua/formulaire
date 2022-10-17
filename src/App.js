import react from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App() {
  return (
    <>
    <h1 className='text-center'>Formulaire</h1>
    <h6 className='text-center'>
Please fill out the form </h6>
    <Card style={{ width: '70rem' ,color:'red' }}>
     
    <form className="formu">
       <fieldset >
      <Form.Group className="mt-3 ">
        <Form.Label><h4>First Name </h4> </Form.Label>
        <Form.Control type="text" placeholder="enter your First Name"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Last Name</h4></Form.Label>
        <Form.Control type="text" placeholder="enter your Last Name"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label> <h4>Email</h4></Form.Label>
        <Form.Control type="email" placeholder="enter your email"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Password</h4></Form.Label>
        <Form.Control type="password" placeholder="enter your password"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Age</h4></Form.Label>
        <Form.Control type="Number" placeholder="enter your Age"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Sexe</h4></Form.Label>
        <Form.Check type="checkbox" label="femme"/>
        <Form.Check type="checkbox" label="homme"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label><h4>pays</h4></Form.Label>
          <Form.Select>
             <option>France</option>
             <option>Tunis</option>
             <option>Canada</option>

          </Form.Select>

      </Form.Group>
      
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Adresse</h4></Form.Label>
        <Form.Control type="password" placeholder="enter your Adresse"/>
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label><h4>Tel</h4></Form.Label>
        <Form.Control type="number" placeholder="enter your Number"/>
      </Form.Group>
  
        <Button type="submit" variant="primary" className='text-center' >submit</Button>
        </fieldset>
    </form>
    </Card>
    </>
  );
}

export default App;
