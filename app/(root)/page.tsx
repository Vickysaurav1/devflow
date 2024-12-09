import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome to the world of nextjs</h1>

      <form
        className="mt-[100px] px-10"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">LogOut</Button>
      </form>
    </div>
  );
};

export default Home;
