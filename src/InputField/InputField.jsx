import { useState, useEffect } from "react";

export function InputField() {
  const [input, setinput] = useState(0);

  /* useEffect(() => {   
        if (selectedButton) {
          setCount((count) => count + 1);
        }
      }, [selectedButton]); */

  return (
    <div className="input">
      <input onChange={(e) => setinput(e.target.value)} />
      <a>
        {" "}
        You entered {input} Multiplied by 2, that equals {input * 2}
      </a>
    </div>
  );
}
