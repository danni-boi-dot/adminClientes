function Error({ children }) {
    return (
        <div className="text-center my-4 bg-red-900 text-white front-bold p-3 uppercase">
            {children}
        </div>
    )
}

export default Error