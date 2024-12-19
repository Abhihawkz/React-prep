import React from "react";

export const UserInfo = () => {
  const userInfo = [
    {
      id: 1,
      name: "jackie",
      Age: 34,
    },
    {
      id: 2,
      name: "john",
      Age: 34,
    },
    {
      id: 3,
      name: "dev",
      Age: 34,
    },
  ];

  return <div>
    {userInfo.map((user) => {
        return <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.Age}</h1>
             </div>
    })}
  </div>;
};
