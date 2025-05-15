'use client';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#2A2D4C] shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#4ECDC4] to-[#4A90E2] rounded-lg shadow-md" />
            <h1 className="text-3xl font-extrabold text-white tracking-wide">Financia</h1>
          </div>
          <div className="flex items-center space-x-10">
            {['Dashboard', 'Applications', 'Profile'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-200 hover:text-[#4ECDC4] text-lg font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;