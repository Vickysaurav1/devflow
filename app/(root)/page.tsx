import React from "react";

import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome to the world of nextjs</h1>
    </div>
  );
};

export default Home;
