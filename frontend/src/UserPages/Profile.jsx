import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserAPI from "../API/userAPI";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserAPI.getUserById(id);
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Age: </p>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
