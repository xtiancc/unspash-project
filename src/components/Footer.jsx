import React from 'react'

const Footer = () => {
    return (
        <footer class="text-center text-white bg-primary" style={{minHeight: "2.9em"}}>
            <p className="p-2">Proyecto realizado por Cristian C. - &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
