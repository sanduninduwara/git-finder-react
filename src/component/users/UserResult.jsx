import { React, useEffect, useContext } from "react";

import GithubContext from "../../context/GithubContext";

import UserItem from "./UserItem";

function UserResult() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    // fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-5'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <div>loading...........</div>;
  }
}

export default UserResult;
