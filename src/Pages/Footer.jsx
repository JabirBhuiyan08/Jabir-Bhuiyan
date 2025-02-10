const Footer = () => {
    return (
        <footer className="bg-[#070F2B] text-white py-6 mt-10">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <h2 className="text-xl font-semibold">Jabir Bhuiyan</h2>
                    <p className="text-sm mt-1">Your trusted web developer.</p>
                </div>
                <nav className="mt-4 md:mt-0">
                    <ul className="flex gap-6">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </nav>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Jabir Bhuiyan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
