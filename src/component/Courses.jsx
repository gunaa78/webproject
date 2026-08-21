import courseCategories from "./courseCategories";

function Courses() {
  return (
    <section
      id="courses"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ================= HEADING ================= */}

        <div className="text-center max-w-2xl mx-auto">

          <span
            className="
              inline-block
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
            WHAT WE TEACH
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-black
              text-gray-900
            "
          >
            Industry-Ready{" "}
            <span className="text-blue-600">
              Course Programs
            </span>
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              leading-7
            "
          >
            Hands-on training designed for real-world jobs,
            freelancing and career growth.
          </p>

        </div>


        {/* ================= COURSE CARDS ================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {courseCategories.map((category) => (

            <div
              key={category.title}
              className="
                group
                relative
                overflow-hidden

                rounded-3xl

                bg-white/45
                backdrop-blur-md

                border
                border-white

                p-6

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]

                hover:bg-white/60
                hover:border-blue-200
                hover:shadow-[0_15px_35px_rgba(37,99,235,0.10)]
                hover:-translate-y-1

                transition-all
                duration-300
                ease-out
              "
            >

              {/* ================= GLASS HIGHLIGHT ================= */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-24

                  bg-gradient-to-b
                  from-white/50
                  to-transparent

                  pointer-events-none
                "
              />


              {/* ================= CONTENT ================= */}

              <div className="relative z-10">

                {/* ICON */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl

                    bg-white/60
                    backdrop-blur-sm

                    border
                    border-white

                    flex
                    items-center
                    justify-center

                    text-2xl

                    shadow-[0_4px_15px_rgba(0,0,0,0.04)]

                    group-hover:scale-105

                    transition-transform
                    duration-200
                  "
                >
                  {category.icon}
                </div>


                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-lg
                    sm:text-xl
                    font-bold
                    text-gray-900

                    group-hover:text-blue-600

                    transition-colors
                    duration-200
                  "
                >
                  {category.title}
                </h3>


                {/* COUNT */}

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-gray-500
                  "
                >
                  {category.courses.length} Programs
                </p>


                {/* COURSE LIST */}

                <div className="mt-5 space-y-3">

                  {category.courses.slice(0, 4).map((course) => (

                    <div
                      key={course}
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-gray-600
                      "
                    >

                      <span
                        className="
                          w-5
                          h-5
                          shrink-0
                          rounded-full

                          bg-white/70

                          border
                          border-blue-100

                          flex
                          items-center
                          justify-center

                          text-[10px]
                          font-bold
                          text-blue-600
                        "
                      >
                        ✓
                      </span>

                      <span>
                        {course}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;