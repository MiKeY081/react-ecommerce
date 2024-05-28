import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ProfileForm from "./ProfileForm";

const UpdateProfile = () => {
  const { user } = useContext(UserContext);
  return (
    user && (
      <>
        <ProfileForm user={user} />
      </>
    )
  );
};

export default UpdateProfile;
