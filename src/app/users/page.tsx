"use client";

import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const aaa = await res.json();

      setUsers(aaa);
    };

    getUsers();
  }, []);

  return <div>{users.map((u) => u.name)}</div>;
};

export default UserPage;
