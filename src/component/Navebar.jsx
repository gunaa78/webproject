import { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };
  //  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

        <div className="bg-white border-b border-gray-100 shadow-sm">

          <div className="max-w-[1600px] mx-auto px-8">

            <div className="h-[80px] flex items-center">

              {/* ================= LOGO ================= */}
              <a
                href="#home"
                className="flex items-center gap-3 shrink-0 group"
              >

                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-all duration-300">
                  <span className="text-white text-xl font-black">
                    H
                  </span>
                </div>

                <div className="leading-none">
                  <h1 className="text-2xl font-black tracking-tight text-gray-900">
                    HIKOO
                  </h1>

                  <p className="mt-1 text-[10px] font-bold tracking-[2.5px] text-blue-600">
                    TECHNOLOGY
                  </p>
                </div>

              </a>


              {/* ================= NAVIGATION ================= */}
              <div className="flex-1 flex justify-center">

                <div className="flex items-center gap-1">

                  {/* Home */}
                  <a
                    href="#home"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-blue-600 bg-blue-50"
                  >
                    Home
                  </a>

                  {/* Courses */}
                  <a
                    href="#courses"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Courses
                  </a>

                  {/* Services */}
                  <a
                    href="#services"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Services
                  </a>

                  {/* Why Us */}
                  <a
                    href="#why"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Why Us
                  </a>

                  {/* Internship */}
                  <a
                  href="#internship"
                   
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Internship
                  </a>

                  {/* Career */}
                  <a
                    href="#career"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Career
                  </a>

                  {/* Reviews */}
                  <a
                    href="#testimonials"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Reviews
                  </a>

                  {/* Contact */}
                  <a
                    href="#contact"
                    className="px-3.5 py-2.5 rounded-lg text-[13px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    Contact
                  </a>

                </div>

              </div>


              {/* ================= RIGHT CTA ================= */}
              <div className="flex items-center gap-3 shrink-0">

                <a
                  href="#enroll"
                  className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Enroll Now

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= MOBILE / TABLET ================= */}
      <div className="lg:hidden">

        <div className="bg-white border-b border-gray-100 shadow-sm">

          <div className="px-5 sm:px-8">

            <div className="h-[72px] flex items-center justify-between">

              {/* Logo */}
              <a
                href="#home"
                onClick={handleClick}
                className="flex items-center gap-3"
              >

                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
                  <span className="text-white text-xl font-black">
                    H
                  </span>
                </div>

                <div className="leading-none">

                  <h1 className="text-lg font-extrabold text-gray-900">
                    HIKOO
                  </h1>

                  <p className="mt-1 text-[7px] font-bold tracking-[2px] text-blue-600">
                    TECHNOLOGY
                  </p>

                </div>

              </a>


              {/* Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-11 h-11 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 flex items-center justify-center text-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
              >
                {menuOpen ? "✕" : "☰"}
              </button>

            </div>

          </div>


          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (

            <div className="border-t border-gray-100 bg-white max-h-[calc(100vh-75px)] overflow-y-auto">

              <div className="px-5 sm:px-8 py-5">

                <div className="flex flex-col gap-1">

                  {/* Home */}
                  <a
                    href="#home"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold bg-blue-50 text-blue-600"
                  >
                    Home
                  </a>

                  {/* Courses */}
                  <a
                    href="#courses"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Courses
                  </a>

                  {/* Services */}
                  <a
                    href="#services"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Services
                  </a>

                  {/* Why Us */}
                  <a
                    href="#why"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Why Us
                  </a>

                  {/* Internship */}
                  <a
                   href="#internship"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Internship
                  </a>

                  {/* Career */}
                  <a
                    href="#career"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Career
                  </a>

                  {/* Reviews */}
                  <a
                    href="#testimonials"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Reviews
                  </a>

                  {/* Contact */}
                  <a
                    href="#contact"
                    onClick={handleClick}
                    className="px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    Contact
                  </a>

                </div>


                {/* Mobile CTA */}
                <div className="mt-4">

                  <a
                    href="#enroll"
                    onClick={handleClick}
                    className="block text-center py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition"
                  >
                    Enroll Now →
                  </a>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;