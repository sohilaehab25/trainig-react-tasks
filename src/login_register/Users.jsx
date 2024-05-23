import { useState } from "react";
import LoginSignup from "./LoginSignup";
import UserTable from "./UserTAble";

const Users = () => {
  const [users, Setuser] = useState([]);
  const handleDelete = (indexToDelete) => {
    Setuser(users.filter((_, index) => index !== indexToDelete));
  };


  return (
    <>
      <LoginSignup users={users} Setuser={Setuser} />
      <UserTable users={users} Setuser={Setuser} onDelete={handleDelete} />
    </>
  );
};

export default Users;
