import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoprojectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProjects from "./components/SelectedProjects.jsx";
function App() {
  const [projectState, setProjectState] = useState({
    selectedPropertyId: undefined,
    projects: [],
    tasks: [],
  });
  console.log(projectState);

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        prejectId: prevState.selectedPropertyId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPropertyId: id,
      };
    });
  }
  //start adding project
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPropertyId: null,
      };
    });
  }
  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPropertyId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedPropertyId: undefined,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedPropertyId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedPropertyId
        ),
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedPropertyId
  );
  let content = (
    <SelectedProjects
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedPropertyId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.selectedPropertyId === undefined) {
    content = <NoprojectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
