

const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className="navbar">
            {navLinks.map(link => (
                <a key={link.name} href={link.path} className="nav-link">
                    {link.name}
                </a>
            ))}
        </nav>
    )
}

export default Navbar