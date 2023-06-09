import { useLoaderData } from "react-router-dom"
import { obtenerClientes } from "../data/Clientes";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}

const Casita = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className='font-black text-4xl text text-slate-800'>Clientes</h1>
      <p className='mt-3'>Administa tus Clientes</p>
      {clientes.lenght ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-mamon text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
      )}
    </>
  )
}
export default Casita