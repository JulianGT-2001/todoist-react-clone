import React, { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { db } from "../firebase";
import { useSelectedProjectValue } from "../context";
import { addDoc, collection } from "firebase/firestore";

export const AddTask = ({ 
    showAddTaskMain = true, 
    showShouldMain = false, 
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const [task, setTask ] = useState("");
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(showShouldMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectValue();

    const addTask = async () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY'){
            collatedDate = moment().format('DD/MM/YYYY');
        }else if (projectId === 'NEXT_7'){
            cikkatedDate = moment()
                .add(7, 'days')
                .format('DD/MM/YYYY');
        }

        return (
            task && 
            projectId && 
            await addDoc(collection(db, 'tasks'), {
                archived: false,
                projectid: projectId,
                task,
                date: collatedDate || taskDate,
                userid: "b46d6cd2-d92b-4999-864b-2aeaf2cbf998"
            }) &&
            setTask('') &&
            setProject('') &&
            setShowMain('') &&
            setShowProjectOverlay(false)
        );
    };

    return (
        <div 
            className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
            data-testid="add-task-comp"
        >
            {showAddTaskMain && (
                <div 
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}
        </div>
    
    );
}