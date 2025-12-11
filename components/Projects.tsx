export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A stunning web application built with modern technologies",
      image: "/placeholder-project.jpg",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "An innovative solution for complex problems",
      image: "/placeholder-project.jpg",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "Beautiful design meets powerful functionality",
      image: "/placeholder-project.jpg",
      tags: ["Vue.js", "Firebase", "CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Explore some of my recent work and creative endeavors
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
