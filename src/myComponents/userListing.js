import React, {useState} from "react";

function UserListing() {
    const [users, setUsers] = useState([
      { id: 1, name: 'Ruplu shahi' },
      { id: 2, name: 'Basant rai' },
      { id: 3, name: 'rajesh hamal' },
    ]);

    return (
        <div>
          <h1>User Listing</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default UserListing;
