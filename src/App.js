import { RouterProvider } from "react-router";
import route from "./router/route";
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() { 
  return (
    <div id="app w-full">
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      <SignedIn>
        {/* <UserButton /> */}
        <RouterProvider router={route}/>
      </SignedIn>
    </div>
  );
}

export default App;
