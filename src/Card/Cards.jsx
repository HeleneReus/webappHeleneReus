import { Card } from "./Card";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export function Cards() {
  return (
    <>
      <Card titel={"React"} link={"https://react.dev/"} logo={reactLogo} />
      <Card titel={"Vite"} link={"https://vitejs.dev/"} logo={viteLogo} />
    </>
  );
}
