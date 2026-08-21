const services = [
  { number: "01", title: "System Design", description: "Build scalable and reliable system architectures." },
  { number: "02", title: "Software Design", description: "Design practical software solutions for real-world needs." },
  { number: "03", title: "IT Consulting", description: "Get technical guidance for your business and projects." },
  { number: "04", title: "Business Consulting", description: "Turn your ideas into practical business solutions." },
  { number: "05", title: "Student Counselling", description: "Choose the right learning and career direction." },
  { number: "06", title: "Career Guidance", description: "Plan your career path with the right guidance." },
  { number: "07", title: "Interview Training", description: "Prepare confidently for technical and HR interviews." },
  { number: "08", title: "Internship Training", description: "Gain practical experience through industry-focused training." },
  { number: "09", title: "Aptitude Courses", description: "Improve your logical, quantitative and reasoning skills." },
  { number: "10", title: "Final Year Projects", description: "Build meaningful projects with proper technical guidance." },
  { number: "11", title: "Logo / Branding Design", description: "Create a strong and professional brand identity." },
  { number: "12", title: "Placement Assistance", description: "Get support to prepare and move towards your career." },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="">

          <div className="max-w-2xl">

            <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
              BEYOND COURSES
            </p>

            <h2
  className="
    mt-4
    text-4xl
    sm:text-5xl
    lg:text-6xl
    font-black
    tracking-tight
    text-gray-900
    leading-tight
  "
>
  Additional <span className="text-blue-600">Services</span>
</h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              sm:text-base
              text-gray-500
              leading-7
              
              mt-4
            "
          >
           We support your entire career journey — from learning to landing the job.
          </p>

        </div>


        {/* ================= SERVICES ================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-6
            gap-y-6
          "
        >

          {services.map((service) => (

            <div
              key={service.number}
              className="
                group
                relative
                bg-white
                rounded-2xl
                p-7

                border
                border-gray-200

                hover:border-blue-500
                hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)]
                hover:-translate-y-1

                transition-all
                duration-300
              "
            >

              {/* Number */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-4xl
                    font-black
                    text-gray-100
                    group-hover:text-blue-100
                    transition-colors
                    duration-300
                  "
                >
                  {service.number}
                </span>

                <span
                  className="
                    text-gray-300
                    text-xl
                    group-hover:text-blue-600
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  ↗
                </span>

              </div>


              {/* Title */}

              <h3
                className="
                  mt-7
                  text-xl
                  font-bold
                  text-gray-900

                  group-hover:text-blue-600

                  transition-colors
                  duration-300
                "
              >
                {service.title}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  text-sm
                  text-gray-500
                  leading-6
                "
              >
                {service.description}
              </p>


              {/* Bottom Accent */}

             {/* Bottom Accent */}

<div
  className="
    mt-7
    h-[3px]
    w-8
    rounded-full
    bg-blue-600

    group-hover:w-16

    transition-all
    duration-300
  "
/>

{/* Learn More */}

<button
  type="button"
  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
>
  Learn More

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>
</div>
            

          ))}
          

        </div>


        {/* ================= BOTTOM CTA ================= */}

        {/* <div
          className="
            mt-14
            rounded-2xl
            bg-gray-900
            px-7
            py-7
            sm:px-10
            sm:py-8

            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
          "
        >

          <div>

            <p className="text-sm text-gray-400">
              Need the right direction?
            </p>

            <h3
              className="
                mt-1
                text-xl
                sm:text-2xl
                font-bold
                text-white
              "
            >
              Let’s build your career together.
            </h3>

          </div>


          <button
            className="
              w-fit
              px-6
              py-3
              rounded-xl

              bg-blue-600
              text-white

              text-sm
              font-bold

              hover:bg-blue-700

              transition-colors
              duration-200
            "
          >
            Get Career Support →
          </button>

        </div> */}

      </div>
    </section>
  );
}

export default Services;