import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Internship() {
  const titleWords = [
    "Build",
    "Your",
    "Career",
    "With",
    "Real-World",
    "Experience",
  ];
      const navigate = useNavigate();

  return (
    <section 
    id="internship"
    className="relative min-h-screen bg-[#f7f9fc] overflow-hidden flex items-center">

      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">

        <div className="max-w-5xl">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-blue-600 font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Internship Program
          </motion.p>


          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#111827] leading-[1.08] flex flex-wrap gap-x-4">

            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  word === "Real-World" || word === "Experience"
                    ? "text-blue-600"
                    : ""
                }
              >
                {word}
              </motion.span>
            ))}

          </h1>


          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: "easeOut",
            }}
            className="mt-8 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl"
          >
            Gain hands-on experience, work on real projects, and develop the
            technical skills you need to build a successful career in the
            technology industry.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            {/* Apply Now */}
            <button
            onClick={()=> navigate("/internship")}
           
             
              className="
                group
                px-8 py-4
                bg-blue-600
                text-white
                font-semibold
                rounded-xl
                shadow-lg
                shadow-blue-600/20
                hover:bg-blue-700
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Apply Now

              <span className="ml-3 inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>


            {/* Explore */}
            {/* <button
              className="
                px-8 py-4
                bg-white
                text-gray-900
                font-semibold
                rounded-xl
                border border-gray-200
                hover:border-blue-600
                hover:text-blue-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Explore Internship
            </button> */}

          </motion.div>


          {/* Bottom Features */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.4,
            }}
            className="mt-14 flex flex-wrap gap-8"
          >

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm text-gray-600">
                Real Projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm text-gray-600">
                Expert Mentorship
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm text-gray-600">
                Career Growth
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Internship;