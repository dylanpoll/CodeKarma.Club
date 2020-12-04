import React, { useState, useEffect } from 'react';
import { Indent, HeaderText, PageTitleText } from "./styleComponets/Layout";
import { Link } from 'react-router-dom';

export function User() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchUsers(); }, []);
  const fetchUsers = async () => {//this pulls from our express to our database
    const data = await fetch(`/users`, { method: 'GET' });
    const users = await data.json();
    setUsers(users);
  }

  const [users, setUsers] = useState([]);
  return (
    <div>
      <PageTitleText>Our current Users!</PageTitleText>
      <Indent>
        <div>{users.map(users => (//maps out our user objects the key is set to _id because mongo uses that as user ID's                  
          <div key={users._id}>
            <HeaderText>
              <Link to={`/users/${users._id}`}>{users.name}</Link>
            </HeaderText>
          </div>))}
        </div>
      </Indent>
    </div>
  );
}