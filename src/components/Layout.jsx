import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold">Holis</h1>

            <Outlet
            
            />
        </div>
    )
}

export default Layout