import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
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
    <div className='container py-5 vh-100 justify-content-center align-items-center'>
        <Button className='mb-3 bg-success'><Link to='/create' style={{  textDecoration: 'none', color:'white'}}> + ADD</Link></Button>
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL ID</th>
          <th>REMARK</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
            students.map((data, index) => (
                <tr key={index}>
                   <td>{data.ID}</td>
                   <td>{data.Name || '-'}</td>
                   <td>{data.Email || '-'}</td>
                   <td>{data.Remark || '-'}</td>
                   <td>
                   <Button className='bg-primary me-3'>EDIT</Button>
                   <Button className='bg-danger'>DELETE</Button>
                   </td>
                 </tr>
               ))
        ) : (
            <tr className='text-center'>
              <td colSpan="5">No Data found</td>
            </tr>
        )
              
        }
      </tbody>
    </Table>
        </div>
    </div>
  );
}

export default Student;
