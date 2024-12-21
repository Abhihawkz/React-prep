import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomID from "./CustomID";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomID />

      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem eos
        provident laboriosam accusamus harum fugiat nesciunt tempora iure cum!
        Tempore voluptates, ex vero nulla rem eum necessitatibus laudantium
        dolores maxime voluptatem quam iure magnam voluptatibus id quod esse
        tempora.
      </p>
      <CustomID />
    </>
  );
}

export default App;
