import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-400 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects{" "}
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-1/2 text-left px-2 py-1 rounded-sm   hover:bg-cyan-200 hover:text-slate-700";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-violet-600";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
