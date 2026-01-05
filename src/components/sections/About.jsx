import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Python", "Java", "MongoDB", "FastAPI"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#B56078] to-[#D8A1B2] bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* ABOUT CARD WITH IMAGE */}
          <div className="rounded-xl p-8 border border-[var(--border-soft)] hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src="public/profile.jpg"
                  alt="Dulasi"
                  className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl
                             border border-[var(--border-soft)] shadow-lg"
                />
              </div>

              {/* About Content */}
              <div className="md:col-span-2">
                <p className="text-[var(--text-muted)] mb-6">
                  Full Stack Web Developer with hands-on experience building and
                  supporting web applications. Adaptable and quick to learn new
                  frameworks, tools, and deployment workflows in fast-paced,
                  customer-focused environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-[var(--accent-soft)] text-[var(--accent-main)]
                                     py-1 px-3 rounded-full text-sm transition
                                     hover:bg-[rgba(181,96,120,0.25)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-[var(--accent-soft)] text-[var(--accent-main)]
                                     py-1 px-3 rounded-full text-sm transition
                                     hover:bg-[rgba(181,96,120,0.25)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* EDUCATION + EXPERIENCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            {/* EDUCATION */}
            <div className="p-6 rounded-xl border border-[var(--border-soft)] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>

              <ol className="list-decimal list-inside space-y-6 text-[var(--text-main)]">
                <li>
                  <p className="font-semibold">
                    H.N.D. in Computer Programming and Software Engineering
                    <span className="block text-sm font-normal text-[var(--text-muted)]">
                      Cardiff Metropolitan University, UK (2022–2024)
                    </span>
                  </p>

                  <ul className="list-disc list-inside mt-2 ml-4 text-sm text-[var(--text-muted)] space-y-1">
                    <li>Data Structures & Algorithms</li>
                    <li>Web Development</li>
                    <li>Networking</li>
                    <li>Database Management Systems</li>
                    <li>Data Analysis</li>
                  </ul>
                </li>

                <li>
                  <p className="font-semibold">
                    BSc (Hons) in Information Technology
                    <span className="block text-sm font-normal text-[var(--text-muted)]">
                      Middlesex University Dubai (2024–Present)
                    </span>
                  </p>

                  <ul className="list-disc list-inside mt-2 ml-4 text-sm text-[var(--text-muted)] space-y-1">
                    <li>Artificial Intelligence</li>
                    <li>Web Development</li>
                    <li>Web Hosting</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* EXPERIENCE */}
            <div className="p-6 rounded-xl border border-[var(--border-soft)] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6">💼 Work Experience</h3>

              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-[var(--accent-main)]">
                  <h4 className="font-semibold text-[var(--text-main)]">
                    Admin & Operations Assistant
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    DTT Travels and Tours, Sri Lanka · 2023–2024
                  </p>

                  <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                    <li>Improved workflow automation by 15%</li>
                    <li>Reduced project timelines by 30%</li>
                    <li>Coordinated internal and external teams</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-4 border-[var(--accent-main)]">
                  <h4 className="font-semibold text-[var(--text-main)]">
                    Coursework Projects
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    Academic · 2023
                  </p>

                  <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                    <li>Built front-end components using modern frameworks</li>
                    <li>Worked with REST API integration</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
