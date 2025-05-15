"use client";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-white border-r border-gray-200 z-40 pt-8 px-5 shadow-sm">
      <div className="flex flex-col space-y-2">
        {["New Application", "Loan History", "Documents", "Settings"].map(
          (item, index) => (
            <a
              key={item}
              href="#"
              className={`flex items-center px-4 py-3 rounded-xl transition-all group cursor-pointer ${
                index === 0 ? "bg-[#F0F4FF]" : "hover:bg-[#F0F4FF]"
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-opacity ${
                  index === 0
                    ? "bg-[#4ECDC4] opacity-100"
                    : "bg-[#4ECDC4] opacity-0 group-hover:opacity-100"
                }`}
              ></div>
              <span
                className={`ml-4 text-[16px] font-semibold ${
                  index === 0
                    ? "text-[#2A2D4C]"
                    : "text-[#2D3748] group-hover:text-[#2A2D4C]"
                }`}
              >
                {item}
              </span>
            </a>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
