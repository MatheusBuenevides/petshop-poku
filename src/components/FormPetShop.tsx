import React, { useState, FormEvent } from 'react';
import AppointmentService from '../services/AppointmentService';
import { ToastContainer, toast,  Slide} from 'react-toastify';

const FormPetShop: React.FC = () => {
  const [especie, setEspecie] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [autorizacaoIbama, setAutorizacaoIbama] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { allowed, reason } = await AppointmentService.validateAppointment(
      especie,
      data,
      autorizacaoIbama
    );

    if (!allowed) {
      toast.error(
        `Agendamento bloqueado:!  ${reason}`,
        {
          position: "bottom-center",
          theme: "dark",
          pauseOnHover: false,
          transition: Slide
        }
      );
      return;
    }

    toast.success(
      `Agendamento válido. Espécie: ${especie}, Data: ${data}`,
      {
        position: "bottom-center",
        theme: "dark",
        pauseOnHover: false,
        transition: Slide
      }
    );
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
      <ToastContainer 
        position="bottom-center"
        theme="dark"
        pauseOnFocusLoss={false}
        transition={Slide}
      />
    </form>
  );
};

export default FormPetShop;
