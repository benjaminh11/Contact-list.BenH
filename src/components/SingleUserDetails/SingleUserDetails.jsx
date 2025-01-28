import React, { useEffect, useState } from "react";
import axios from "axios";

function SingleUserDetails({ setFeaturedUser, featuredUser }) {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    axios(
      `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${featuredUser}`
    )
      .then((data) => {
        console.log(data.data);
        setUserDetails(data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Details for {userDetails?.name}</h2>
      <p>Phone: {userDetails?.phone}</p>
      <p>Email: {userDetails?.email}</p>
      <p>
        Address: {userDetails?.address?.street} {userDetails?.address?.city}{" "}
        {userDetails?.address?.zipcode}
      </p>
      <button onClick={() => setFeaturedUser(null)}>Go back to list</button>
    </div>
  );
}

export default SingleUserDetails;
