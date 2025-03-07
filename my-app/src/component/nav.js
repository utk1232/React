const Header = () => {
    return (
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        
            <div className="text-2xl font-bold">MyWebsite</div>
  
          
            <nav className="space-x-6">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/about" className="hover:text-gray-300">About</a>
              <a href="/services" className="hover:text-gray-300">Services</a>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  