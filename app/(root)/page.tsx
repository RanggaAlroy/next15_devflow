import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constant/routes";

// Server Action for handling sign-out
export async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: ROUTES.SIGN_IN });
}

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h2-bold">Hello, this is Starter Next.js development</h1>

      <form action={handleSignOut} className="mt-[100px] px-10">
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
