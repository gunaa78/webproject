function Home() {
  return (
    <section
     id="home"
      className="
        min-h-screen
        bg-white
        pt-[72px]
        sm:pt-[80px]
        lg:pt-[82px]
        flex
        items-center
      "
    >
      <div
        className="
          w-full
          max-w-[1100px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-16
          sm:py-20
          lg:py-24
        "
      >

        {/* ================= CENTER CONTENT ================= */}

        <div className="text-center">

          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-blue-50
              text-blue-600
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            HIKOO TECHNOLOGY
          </div>


          {/* Heading */}
          <h1
            className="
              mt-6
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-7xl
              font-black
              leading-[1.05]
              tracking-tight
              text-gray-900
            "
          >
            Build Skills.
            <br />

            <span className="text-blue-600">
              Build Careers.
            </span>

            <br />

            Build Technology.
          </h1>


          {/* Tagline */}
          <p
            className="
              mt-6
              text-lg
              sm:text-xl
              lg:text-2xl
              font-semibold
              text-gray-700
            "
          >
            Simplicity Solves Complexity
          </p>


          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
              text-gray-500
            "
          >
            Learn modern technologies, work on real-world
            projects and build the skills you need for a
            successful technology career.
          </p>


          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-3
              justify-center
            "
          >

            <a
              href="#courses"
              className="
                px-7
                py-3.5
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
                text-sm
                sm:text-base
                hover:bg-blue-700
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Explore Courses →
            </a>


            <a
              href="#contact"
              className="
                px-7
                py-3.5
                rounded-xl
                border
                border-gray-200
                text-gray-700
                font-semibold
                text-sm
                sm:text-base
                hover:border-blue-300
                hover:text-blue-600
                transition-all
                duration-300
              "
            >
              Get Started
            </a>

          </div>


          {/* Features */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-4
            "
          >

            <span className="text-sm text-gray-600">
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Practical Learning
            </span>

            <span className="text-sm text-gray-600">
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Real Projects
            </span>

            <span className="text-sm text-gray-600">
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Internship Opportunities
            </span>

            <span className="text-sm text-gray-600">
              <span className="text-blue-600 font-bold">✓</span>{" "}
              Career Support
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;