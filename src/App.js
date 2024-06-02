import { RouterProvider } from "react-router";
import route from "./router/route";
import { RedirectToSignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() { 
  return (
    <div id="app" className="h-screen">
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
