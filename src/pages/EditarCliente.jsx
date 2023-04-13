import { obtenerUsuario } from "../data/Clientes"

export async function loader({ params }) {
    const cliente = await obtenerUsuario(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }
    return cliente
}

function EditarCliente() {
    return (
        <>
        hola
        </>
    )
}

export default EditarCliente