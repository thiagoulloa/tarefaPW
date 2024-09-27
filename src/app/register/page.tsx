"use client";
import Link from "next/link";
import { useState } from "react";
import { MotionButton } from "../ui/Button";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log("Usuário registrado com sucesso!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 h-screen w-full justify-center items-center text-white">
      <p className="text-3xl">Seja bem-vindo(a)</p>
      <div className="flex flex-col gap-10 h-2/4 w-full justify-center items-center text-black">
        <input
          className="h-[8%] w-[40%] rounded-full px-5"
          placeholder="email"
          type="input"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="h-[8%] w-[40%] rounded-full px-5"
          placeholder="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <MotionButton
          label={isLoading ? "Entrando..." : "Registrar"}
          className="rounded-full bg-white/60 w-[40%] h-[8%]"
          func={handleRegister}
          type="button"
        ></MotionButton>
        <Link href="/">
          <p className="text-white cursor-pointer">
            Já possui uma conta? Clique aqui
          </p>
        </Link>
      </div>
    </div>
  );
}
