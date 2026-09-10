const Navbar = () => {
  return (
    <div className="bg-base-100 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-pink-500 font-medium">Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="items-center cursor-pointer text-xl hidden lg:flex">
            <div className="w-8 h-8 rounded bg_brand_gradient flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <span className="font-bold">
              Dev<span className="text_brand_gradient">Stack</span>
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-pink-500 font-medium hover:bg-transparent">
                Home
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-pink-500">
                Technologies
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-pink-500">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-pink-500">About</a>
            </li>
            <li>
              <a className="hover:bg-transparent hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <a className="font-medium cursor-pointer">Sign In</a>
          <a className="btn bg_brand_gradient text-white border-none rounded-full px-6 min-h-10 h-10">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
