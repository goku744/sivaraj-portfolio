export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8">

        <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
          Sivaraj
        </h2>

        <p className="text-center text-slate-400">
          AI & Data Science Portfolio
        </p>

        <div className="flex gap-6 text-cyan-400">

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sivasivaraj46186@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sivaraj. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}