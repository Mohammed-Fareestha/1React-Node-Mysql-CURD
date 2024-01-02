import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [remark, setRemark] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/create', { name, email, remark })
      .then((res) => {
        console.log(res);
        alert(`Successfully created`)
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container py-5 vh-100 justify-content-center align-items-center'>
      <div>
        <h3>Add Student</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Enter Remarks</Form.Label>
          <Form.Control
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            type='text'
          />
        </Form.Group>
        <Button type='submit' className='bg-success mt-3'>
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default Create;
