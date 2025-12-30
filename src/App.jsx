```jsx
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center text-sm py-8 text-gray-400">
        © {new Date().getFullYear()} LilacLuxe · Built with 💜 + React
      </footer>
    </div>
  );
}
```
