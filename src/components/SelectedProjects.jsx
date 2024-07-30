import Task from "./Task";

export default function SelectedProjects({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-sans font-bold">{project.title}</h1>
          <button
            onClick={onDelete}
            className="px-4 py-2  text-xs md:text-base rounded-md bg-purple-700 text-white hover:bg-cyan-200 hover:text-slate-700"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400 ">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
