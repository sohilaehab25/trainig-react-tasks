import Table from 'react-bootstrap/Table';

function UserTable({ users, Setuser, onDelete }) { 
   

    
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Index</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td> 
              <td>{user.password}</td>
              <td><button className='btn btn-danger' onClick={()=>{onDelete(index)}} >Delete</button></td> 
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
