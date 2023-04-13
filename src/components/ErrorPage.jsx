import { useRouteError } from "react-router-dom";

import React from 'react'

function ErrorPage() {
    const error = useRouteError()
    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabol mt-20 text-slate-900"> pilin</h1>
            <p className="text-center">Hubo un Herror</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage 