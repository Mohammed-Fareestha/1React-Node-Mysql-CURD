import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/table')
      .then(res => setStudents(res.data))
      .catch(err => {
        console.log('ERROR! : ' + err);
      });
  }, []);

  return (
    <div className='container my-5 vh-100 justify-content-center align-items-center'>
      <Button className='mb-3'> + ADD</Button>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL ID</th>
              <th>REMARK</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, index) => (
              <tr key={index}>
                <td>{data.ID}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Remark}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Student;
