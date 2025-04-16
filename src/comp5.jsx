
import { useContext } from "react";
import { mycontext } from "./App";
const Comp5 = () => {
    // console.log(user);
    const user=useContext(mycontext);
  return (
    <>
      <h1>Comp -5</h1>
      <h2>Welcome {user}</h2>
      {/* <button
        onClick={() => {
          setInput("Amar");
        }}
      >
        Click Me!!!!
      </button> */}
    </>
  );
};
export default Comp5;