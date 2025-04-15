// src/components/FormPetShop.tsx
import React, { useState, FormEvent } from 'react';

const FormPetShop: React.FC = () => {
  const [especie, setEspecie] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [autorizacaoIbama, setAutorizacaoIbama] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode realizar validações ou enviar os dados para um back-end
    alert(`Espécie: ${especie}\nData: ${data}\nAutorização IBAMA: ${autorizacaoIbama ? 'Sim' : 'Não'}`);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mx-auto w-full max-w-sm p-4 bg-white shadow-md rounded"
    >
      <h1 className="text-2xl font-bold mb-4">PetShop Poku</h1>
      
      <label htmlFor="especie" className="block mb-2 font-medium text-gray-700">
        Espécie
      </label>
      <input
        id="especie"
        type="text"
        placeholder="Ex: cachorro, gato, jacaré"
        className="block w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
      />

      <label htmlFor="data" className="block mb-2 font-medium text-gray-700">
        Data
      </label>
      <input
        id="data"
        type="date"
        className="block w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <div className="mb-4 flex items-center gap-2">
        <input
          id="autorizacaoIbama"
          type="checkbox"
          className="h-4 w-4"
          checked={autorizacaoIbama}
          onChange={(e) => setAutorizacaoIbama(e.target.checked)}
        />
        <label htmlFor="autorizacaoIbama" className="text-gray-700">
          Você tem autorização do IBAMA?
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
      >
        Validar Agendamento
      </button>
    </form>
  );
};

export default FormPetShop;
