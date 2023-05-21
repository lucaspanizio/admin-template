import React, { use, useState } from "react";
import { AuthInput } from "@/components/auth/AuthInput";
import { WarningIcon, GoogleIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";

type Mode = "login" | "register";

const Auth: React.FC = () => {
  const [mode, setMode] = useState<Mode>("login");
  const [background] = useState(
    `/images/background${Math.floor(Math.random() * 7 + 1)}.png`
  );
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState<string | null>(null);

  const { register, login, loginGoogle } = useAuth();

  async function submit() {
    try {
      if (email && password) {
        if (mode === "login") {
          await login?.(email, password);
        } else {
          await register?.(email, password);
        }
      } else {
        showError("Informe email e senha válidos!");
      }
    } catch (err: any) {
      showError(err?.message ?? "Erro desconhecido!");
    }
  }

  function showError(msg: string, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  const closeError = () => setError(null);

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <Image
          // https://source.unsplash.com/collection/[collection_id]/[width]x[height]
          // src="https://source.unsplash.com/random/900x700/?city,nigth"
          src={background}
          width={900}
          height={700}
          alt="Imagem da Tela de Login"
          className={`object-cover h-screen w-full`}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-2xl font-bold mb-5`}>
          {mode === "login" ? "Entre com a sua conta" : "Cadastre-se"}
        </h1>

        {error ? (
          <div
            className={`
            flex justify-between bg-red-400 text-white  py-3 px-5 my-2
            border border-red-500 rounded-lg
          `}
          >
            <div className="flex items-center">
              {WarningIcon}
              <span className="ml-3">{error}</span>
            </div>
            <span
              className="cursor-pointer hover:font-bold"
              onClick={closeError}
            >
              X
            </span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          value={email}
          type="email"
          handleChange={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          value={password}
          type="password"
          handleChange={setPassword}
          required
        />
        <button
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`w-full my-6 border-gray-300`} />

        <button
          onClick={loginGoogle}
          className={`
            flex items-center justify-center w-full 
            bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          {GoogleIcon(18)}
          <span className="ml-2">Entrar com Google</span>
        </button>

        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode("register")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da comunidade?
            <a
              onClick={() => setMode("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
