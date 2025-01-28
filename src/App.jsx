import React, { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SingleUserDetails from "./components/SingleUserDetails/SingleUSerDetails";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      <h2>{featuredUser}</h2>
      {featuredUser ? (
        <SingleUserDetails
          setFeaturedUser={setFeaturedUser}
          featuredUser={featuredUser}
        />
      ) : (
        <ContactList setFeaturedUser={setFeaturedUser} />
      )}
    </>
  );
}

export default App;
