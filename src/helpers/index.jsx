import { collatedTasks } from '../constanst';

export const collatedTasksExist = selectedProject => 
    collatedTasks.find(task => task.key === selectedProject);
