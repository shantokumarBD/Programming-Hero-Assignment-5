const StackSidebar = () => {
  return (
    <div className="border border-base-200 rounded-2xl p-6 bg-base-100 sticky top-24 h-max">
      {/* Heading */}
      <h2 className="text-xl font-bold text-[#0F172A]">Your Stack</h2>
      <p className="text-sm text-[#64748B] mb-5">
        1 Technology Selected
      </p>

      {/* Stack Items List */}
      <div className="flex flex-col gap-3 mb-6">
        
        {/* Single Static Item Design */}
        <div className="border border-base-200 rounded-lg p-3 flex items-center justify-between bg-white shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            {/* Icon Box */}
            <div className="w-10 h-10 p-1.5 bg-white border border-base-200 rounded-md shrink-0 flex items-center justify-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="Tech Icon"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Texts */}
            <div className="min-w-0">
              <h4 className="font-bold text-sm text-[#0F172A] truncate">
                React
              </h4>
              <p className="text-xs text-[#64748B] truncate">
                Frontend
              </p>
            </div>
          </div>
          {/* Remove Button */}
          <button className="btn btn-ghost btn-sm btn-circle text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0">
            ✕
          </button>
        </div>

      </div>

      {/* Remove All Button */}
      <button className="btn btn-outline text-red-500 border-red-200 hover:bg-red-50 hover:border-red-500 hover:text-red-600 w-full rounded-lg">
        Remove All
      </button>
      
    </div>
  );
};

export default StackSidebar;
