import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#B56078] to-[#D8A1B2] bg-clip-text text-transparent text-center">
            Academic & Coursework Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-[var(--border-soft)] hover:-translate-y-1 hover:border-[rgba(181,96,120,0.25)] transition">
              <h3 className="text-xl font-bold mb-2">
                Restaurant E-Commerce Website
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Full-stack restaurant e-commerce platform with online ordering
                and admin-side product management.
              </p>

              <ul className="list-disc list-inside text-[var(--text-muted)] mb-4 space-y-1">
                <li>Built responsive UI for menu browsing and ordering</li>
                <li>Implemented CRUD operations for food items and orders</li>
                <li>Connected frontend with backend APIs</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Node.js", "Database"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--accent-soft)] text-[var(--accent-main)] py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-[var(--border-soft)] hover:-translate-y-1 hover:border-[rgba(181,96,120,0.25)] transition">
              <h3 className="text-xl font-bold mb-2">
                Ticketing System (CRUD Application)
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Web-based ticket management system focused on structured data
                handling and process flow.
              </p>

              <ul className="list-disc list-inside text-[var(--text-muted)] mb-4 space-y-1">
                <li>Developed create, update, delete, and view ticket features</li>
                <li>Applied validation and database operations</li>
                <li>Improved logical thinking and backend fundamentals</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {["MVS", "ASP.NET", "C#","Database"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--accent-soft)] text-[var(--accent-main)] py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-[var(--border-soft)] hover:-translate-y-1 hover:border-[rgba(181,96,120,0.25)] transition md:col-span-2">
              <h3 className="text-xl font-bold mb-2">
                AI Project – Multi-Layer Perceptron (MLP)
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                Academic machine learning project implementing an MLP model for
                prediction and analysis.
              </p>

              <ul className="list-disc list-inside text-[var(--text-muted)] mb-4 space-y-1">
                <li>Preprocessed data and trained an MLP model</li>
                <li>Evaluated model performance and accuracy</li>
                <li>Gained hands-on experience with ML workflows</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "MLP"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--accent-soft)] text-[var(--accent-main)] py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
