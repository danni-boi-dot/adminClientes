import React from 'react'

function Cliente() {

    const { nombre, empresa, email, telefono, id } = cliente
    return (
        <tr className='border-b'>
            <td className="p-6">
                <p className='text-2xl text-gray-800'>{nombre}</p>
                <p>{empresa}</p>
            </td>
        </tr>
    )
}

export default Cliente