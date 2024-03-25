import React from 'react';
import UsersListItem from './users-list-item';

const UsersList = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await result.json();

  return (
    <div className="grid grid-cols-5 gap-3 w-2/3">
      {users.length > 0 && users.map(user => (
        <UsersListItem key={user} user={user} />
      ))}
    </div>
  )
}

export default UsersList;