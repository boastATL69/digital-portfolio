```jsx
const projects = [
  {
 title: "StyleSync",
    description: "A responsive theming system for personal blogs.",
    tech: "React, Styled Components",
    link: "#"
  },
  {
 title: "BeautyHub",
    description: "Track and categorize skincare products using live API data.",
    tech: "JavaScript, APIs",
    link: "#"
  },
  {
 title: "MemoryBox",
    description: "Create and tag photo keepsakes with drag‑and‑drop UI.",
    tech: "React, File Upload",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-violet-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-slate-900 p-6 rounded-xl hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition"
          >
 <h3 className="text-xl font-semibold mb-2 text-pink-400">
              {p.title}
            </h3>
            <p className="text-gray-400 mb-3">{p.description}</p>
            <p className="text-sm text-gray-500 mb-4">{p.tech}</p>
            <a
              href={p.link}
              className="text-violet-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
 View Project →
            </a>
          </div>
        ))}
 </div>
    </section>
  );
}
```
