"use client";
import { useState } from "react";
export default function Home() {
  const [credentials, setCredentials] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", credentials);
  };

  const onChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return(
    <dev>This is Home</dev>
  )
}
