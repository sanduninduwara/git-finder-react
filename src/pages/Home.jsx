import React from "react";
import UserResult from "../component/users/UserResult";
import UserSearch from "../component/users/UserSearch";

function Home() {
  return (
    <>
      <h1 className='text-4xl'>Welcome MF</h1>
      <UserSearch />
      <UserResult />
    </>
  );
}

export default Home;
