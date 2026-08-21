import { useState } from "react";

function InternshipApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    internship: "",
    mode: "",
    duration: "",
    startDate: "",
    resume: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Internship Application Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      year: "",
      internship: "",
      mode: "",
      duration: "",
      startDate: "",
      resume: "",
      message: "",
    });
  };

  const domains = [
    {
      title: "Web Development",
      description:
        "Learn to build responsive and modern websites using HTML, CSS, JavaScript and modern frameworks.",
      icon: "🌐",
    },
    {
      title: "React.js Development",
      description:
        "Build real-world React applications using components, hooks, routing and API integration.",
      icon: "⚛️",
    },
    {
      title: "Node.js Development",
      description:
        "Learn backend development, REST APIs, Express.js and database integration.",
      icon: "🟢",
    },
    {
      title: "Python Development",
      description:
        "Develop Python applications and understand programming, APIs and backend development.",
      icon: "🐍",
    },
    {
      title: "UI / UX Design",
      description:
        "Create user-friendly interfaces, wireframes and professional designs using modern design tools.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, content strategy and digital branding.",
      icon: "📈",
    },
  ];

  const benefits = [
    "Real-world project experience",
    "Industry-oriented training",
    "Professional mentorship",
    "Hands-on practical learning",
    "Internship certificate",
    "Project completion certificate",
    "Resume building guidance",
    "Interview preparation",
    "Career guidance",
    "Portfolio development",
  ];

  const learning = [
    {
      number: "01",
      title: "Technical Skills",
      text: "Develop practical technical skills by working with modern tools and technologies.",
    },
    {
      number: "02",
      title: "Real Projects",
      text: "Work on real-world projects and understand how professional development works.",
    },
    {
      number: "03",
      title: "Team Collaboration",
      text: "Learn Git, teamwork, communication and professional development practices.",
    },
    {
      number: "04",
      title: "Problem Solving",
      text: "Improve your logical thinking and learn how to solve real development problems.",
    },
    {
      number: "05",
      title: "Career Skills",
      text: "Prepare your resume, portfolio and interview skills for future opportunities.",
    },
    {
      number: "06",
      title: "Industry Exposure",
      text: "Understand industry workflows and gain exposure to professional working environments.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Submit Application",
      text: "Fill out the internship application form with your academic and personal details.",
    },
    {
      number: "02",
      title: "Application Review",
      text: "Our team reviews your application and evaluates your interests and skills.",
    },
    {
      number: "03",
      title: "Selection",
      text: "Selected candidates will receive internship confirmation and further instructions.",
    },
    {
      number: "04",
      title: "Training & Projects",
      text: "Start your internship with training, mentorship and real-world project work.",
    },
    {
      number: "05",
      title: "Project Completion",
      text: "Complete your assigned project and demonstrate your practical skills.",
    },
    {
      number: "06",
      title: "Certificate",
      text: "Receive your internship certificate after successful completion of the program.",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for the internship?",
      answer:
        "Students, freshers and aspiring professionals who want to gain practical industry experience can apply.",
    },
    {
      question: "What is the internship duration?",
      answer:
        "Internship duration can range from 1 to 6 months depending on the selected domain and program.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. Candidates who successfully complete the internship will receive an internship certificate.",
    },
    {
      question: "Is the internship project-based?",
      answer:
        "Yes. The program focuses on practical learning through projects and industry-oriented tasks.",
    },
    {
      question: "Can freshers apply?",
      answer:
        "Yes. Freshers and students with basic knowledge can also apply.",
    },
    {
      question: "Will there be mentorship?",
      answer:
        "Yes. Interns receive guidance and mentorship throughout the internship program.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <div className="bg-gray-950 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            HIKOO INTERNSHIP PROGRAM
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Build Your Skills.
            <br />
            Gain Real Experience.
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
            Start your career journey with practical projects,
            professional mentorship and industry-oriented learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#apply"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Apply Now
            </a>

            <a
              href="#domains"
              className="border border-gray-600 hover:border-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Explore Domains
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            <div>
              <h3 className="text-3xl font-bold">1–6</h3>
              <p className="text-gray-400 mt-2">Months</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">6+</h3>
              <p className="text-gray-400 mt-2">Domains</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-400 mt-2">Practical</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">1:1</h3>
              <p className="text-gray-400 mt-2">Mentorship</p>
            </div>

          </div>
        </div>
      </div>


      {/* ABOUT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold">
              ABOUT THE PROGRAM
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Learn by Building Real Projects
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              The HIKOO internship program is designed to help students
              and freshers transform their theoretical knowledge into
              practical industry skills.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Instead of only learning concepts, interns get the opportunity
              to work on practical projects, solve real problems and understand
              professional development workflows.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold mb-6">
              Program Highlights
            </h3>

            <div className="space-y-4">

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Practical industry-oriented training</p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Real-world project development</p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Experienced mentor guidance</p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Professional portfolio building</p>
              </div>

              <div className="flex gap-4">
                <span className="text-blue-600 text-xl">✓</span>
                <p>Internship certificate</p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* DOMAINS */}
      <div id="domains" className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              INTERNSHIP DOMAINS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Choose Your Career Path
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Select a domain based on your interests and career goals.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {domains.map((domain) => (

              <div
                key={domain.title}
                className="border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition"
              >

                <div className="text-4xl">
                  {domain.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {domain.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {domain.description}
                </p>

                <a
                  href="#apply"
                  className="inline-block text-blue-600 font-semibold mt-5"
                >
                  Apply for this →
                </a>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ELIGIBILITY */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 text-white rounded-2xl p-8">

            <p className="text-blue-400 font-semibold">
              ELIGIBILITY
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Who Can Apply?
            </h2>

            <ul className="mt-7 space-y-4 text-gray-300">

              <li>✓ College and university students</li>
              <li>✓ Final-year students</li>
              <li>✓ Recent graduates</li>
              <li>✓ Freshers</li>
              <li>✓ Career beginners</li>
              <li>✓ Students interested in technology and design</li>

            </ul>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <p className="text-blue-600 font-semibold">
              PROGRAM DETAILS
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Internship Information
            </h2>

            <div className="mt-7 space-y-5">

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Duration</span>
                <strong>1 – 6 Months</strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Learning</span>
                <strong>Project Based</strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Mentorship</span>
                <strong>Available</strong>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-500">Certificate</span>
                <strong>Yes</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Mode</span>
                <strong>Flexible</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* WHAT YOU WILL LEARN */}
      <div className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Skills That Move Your Career Forward
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {learning.map((item) => (

              <div
                key={item.number}
                className="bg-white rounded-2xl p-7"
              >

                <span className="text-blue-600 font-bold text-lg">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* BENEFITS */}
      <div className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">

            <div>

              <p className="text-blue-600 font-semibold">
                INTERNSHIP BENEFITS
              </p>

              <h2 className="text-4xl font-bold mt-3">
                More Than Just an Internship
              </h2>

              <p className="text-gray-600 mt-5 leading-8">
                Our program is designed to give you practical skills,
                professional confidence and a strong foundation for your
                future career.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-4">

              {benefits.map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-600 font-bold">
                    ✓
                  </span>

                  <p className="text-gray-700">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* PROCESS */}
      <div className="bg-gray-950 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-blue-400 font-semibold">
              APPLICATION PROCESS
            </p>

            <h2 className="text-4xl font-bold mt-3">
              How It Works
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {process.map((item) => (

              <div
                key={item.number}
                className="border border-gray-800 rounded-2xl p-7"
              >

                <span className="text-blue-400 font-bold text-2xl">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* CERTIFICATE */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-blue-600 rounded-3xl p-10 md:p-14 text-white text-center">

          <p className="font-semibold text-blue-100">
            AFTER SUCCESSFUL COMPLETION
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Earn Your Internship Certificate
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-blue-100 leading-7">
            Successfully complete your internship project and receive
            a professional internship certificate that you can showcase
            on your resume and professional profiles.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">

            <div>
              <h3 className="text-xl font-bold">
                Internship
              </h3>
              <p className="text-blue-100 mt-1">
                Certificate
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Project
              </h3>
              <p className="text-blue-100 mt-1">
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Career
              </h3>
              <p className="text-blue-100 mt-1">
                Guidance
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* FAQ */}
      <div className="bg-gray-100 py-20 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">
              FAQ
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="bg-white rounded-xl p-6"
              >

                <summary className="font-semibold cursor-pointer text-lg">
                  {faq.question}
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </div>


      {/* APPLICATION FORM */}
      <div id="apply" className="py-24 px-6 bg-white">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold">
              JOIN HIKOO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Apply for Internship
            </h2>

            <p className="text-gray-600 mt-4">
              Fill in your details and take the first step toward
              your professional career.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-200"
          >

            <h3 className="text-2xl font-bold mb-7">
              Personal Information
            </h3>


            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="College / University"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Course / Degree"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >

                <option value="">
                  Select Current Year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="Final Year">
                  Final Year
                </option>

                <option value="Graduate">
                  Graduate
                </option>

              </select>

            </div>


            <h3 className="text-2xl font-bold mt-12 mb-7">
              Internship Preferences
            </h3>


            <div className="grid md:grid-cols-2 gap-6">

              <select
                name="internship"
                value={formData.internship}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >

                <option value="">
                  Select Internship Domain
                </option>

                <option value="Web Development">
                  Web Development
                </option>

                <option value="React.js">
                  React.js Development
                </option>

                <option value="Node.js">
                  Node.js Development
                </option>

                <option value="Python">
                  Python Development
                </option>

                <option value="UI/UX">
                  UI / UX Design
                </option>

                <option value="Digital Marketing">
                  Digital Marketing
                </option>

              </select>


              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >

                <option value="">
                  Select Internship Mode
                </option>

                <option value="Online">
                  Online
                </option>

                <option value="Offline">
                  Offline
                </option>

                <option value="Hybrid">
                  Hybrid
                </option>

              </select>


              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              >

                <option value="">
                  Select Duration
                </option>

                <option value="1 Month">
                  1 Month
                </option>

                <option value="2 Months">
                  2 Months
                </option>

                <option value="3 Months">
                  3 Months
                </option>

                <option value="6 Months">
                  6 Months
                </option>

              </select>


              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              />

            </div>


            <h3 className="text-2xl font-bold mt-12 mb-7">
              Additional Information
            </h3>


           <div className="w-full">
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Upload Resume
  </label>

  <input
    type="file"
    name="resume"
    accept=".pdf,.doc,.docx"
    onChange={(e) =>
      setFormData({
        ...formData,
        resume: e.target.files[0],
      })
    }
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white cursor-pointer"
  />

  <p className="text-sm text-gray-500 mt-2">
    PDF, DOC or DOCX only
  </p>
</div>


            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about yourself, your skills, projects and career goals..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-6 bg-white"
            />


            <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mt-6">

              <p className="text-sm text-gray-600 leading-6">
                By submitting this application, you confirm that the
                information provided is accurate and complete.
              </p>

            </div>


            <button
              type="submit"
              className="w-full mt-7 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition"
            >
              Submit Internship Application
            </button>

          </form>

        </div>

      </div>


      {/* FINAL CTA */}
      <div className="bg-gray-950 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-400 font-semibold">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Your Career Starts With One Step
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Gain practical experience, build your portfolio and
            prepare yourself for the professional world with HIKOO.
          </p>

          <a
            href="#apply"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Apply Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default InternshipApplication;