import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";

export const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let taskQuery = query(
            collection(db, "tasks"),
            where("userId", "==", "b46d6cd2-d92b-4999-864b-2aeaf2cbf998")
        );

        if (selectedProject) {
            if (selectedProject === "TODAY") {
                taskQuery = query(
                    taskQuery,
                    where("date", "==", moment().format("DD/MM/YYYY"))
                );
            } else if (selectedProject === "INBOX") {
                taskQuery = query(taskQuery, where("date", "==", ""));
            }
        }

        const unsubscribe = onSnapshot(taskQuery, (snapshot) => {
            const newTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setTasks(
                newTasks.filter((task) => task.archived !== true)
            );
            setArchivedTasks(
                newTasks.filter((task) => task.archived === true)
            );
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};


export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .where('userId', '==', 'b46d6cd2-d92b-4999-864b-2aeaf2cbf998')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id,
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
        });
    }, [projects]);

    return { projects, setProjects }
};