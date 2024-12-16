import { collatedTasks } from '../constanst';

export const collatedTasksExist = selectedProject => 
    collatedTasksExist.find(task => task.key === selectedProject);
