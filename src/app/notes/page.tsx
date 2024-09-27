"use client";

import { useContent } from "../lib/content-context";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Notes() {
  const { user } = useContent();
  const [notes, setNotes] = useState<any>([]);
  const router = useRouter();

  const getNotes = async () => {
    try {
      const response = await fetch("/api/anotacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });

      if (response.ok) {
        console.log("Notas resgatadas com sucesso!");
        const data = await response.json();
        setNotes(data.anotacoes);
        console.log(data.anotacoes);
      } else {
        console.log(
          "Erro ao resgatar notas:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.log("Erro de rede:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getNotes();
    }
  }, [user]);

  console.log(user);
  return (
    <div className="flex flex-col gap-10 h-screen w-full justify-center items-center text-white">
      <div className="flex gap-5 items-center">
        <p>Minhas anotações</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-7 h-7"
          onClick={() => router.push("/addNotePage")}
        >
          <FaPlus className="h-full w-full " />
        </motion.button>
      </div>
    </div>
  );
}
