"use server";

import { signOut } from "@/auth";
import { Button } from "./ui/button";


function Logout() {
  return (
    <form action={async () => {
        "use server"
        await signOut();
    }}>
        <Button variant={"ghost"} type="submit">
            logout
        </Button>
    </form>
  )
}

export default Logout