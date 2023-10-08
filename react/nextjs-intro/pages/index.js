import { useEffect, useState } from "react";
import mock from "../mock";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    mock = { name: "newUser", id: 1, age: 30 };
    setUser(mock);
    console.log(mock);
  }, []);
  return <div>index</div>;
}
