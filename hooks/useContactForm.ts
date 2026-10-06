"use client";

import { useState, type FormEvent } from "react";
import { contactWaLink } from "@/data/contact";

export function useContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: FormEvent) => {
    e.preventDefault();
    window.open(contactWaLink({ name, email, phone, message }), "_blank", "noopener");
  };

  return {
    name, setName,
    email, setEmail,
    phone, setPhone,
    message, setMessage,
    send,
  };
}
