// import Background from "./Components/Background";
// import Counter from "./Components/Counter";
// import Navbar from "./Components/Navbar";
// import UserDataForm from "./Components/UserDataForm";
import { RouterProvider } from "react-router";
import route from "./router/route";

function App() {
  return (
    <div id="app" className="relative h-screen flex flex-col">
      <RouterProvider router={route}/>
      {/* <Navbar/> */}
      {/* <Background/>
      <Counter/> */}
      {/* <UserDataForm/> */}
    </div>
  );
}

export default App;
