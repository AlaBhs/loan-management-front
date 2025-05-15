'use client';

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="relative inline-block">
        <h1 className="text-5xl font-bold text-[#2A2D4C] mb-4 relative z-10 leading-tight">
          Loan Application
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#4ECDC4]/30 rounded-md z-0 animate-pulse"></div>
        </h1>
      </div>
      <p className="text-lg text-[#718096]">Fast, secure, and completely digital</p>
    </div>
  );
};

export default Header;