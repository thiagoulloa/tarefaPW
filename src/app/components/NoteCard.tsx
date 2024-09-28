"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export const NoteCard = ({ id, titulo, descricao }: NoteProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/anotacoes", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        console.log("Anotação deletada com sucesso!");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-48 w-64 p-5 rounded-xl text-white gap-5 border border-white flex-col overflow-hidden">
      <div className="w-full flex justify-between">
        <p className="font-bold text-lg">{titulo}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-7 h-7"
          onClick={() => handleDelete()}
        >
          <FaTrash className="h-full w-full " />
        </motion.button>
      </div>

      <p>{descricao}</p>
    </div>
  );
};
