import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CREATE_SUBSCRIBER_MUTATION } from "../queries/subscriber";

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    if (name && email) {
      await createSubscriber({
        variables: {
          name,
          email
        }
      });
  
      setName('');
      setEmail('');
  
      navigate('/event');
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <img src={logo} alt="Logo" />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma aplicação completa, do zero, com <strong>ReactJS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar a linguagem do total zero.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code.png" alt="code" className="mt-10" />
    </div>
  )
}