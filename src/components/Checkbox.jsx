import React from "react";
import { db } from '../firebase'
import { doc, updateDoc } from "firebase/firestore";

export const Checkbox = ({id}) => {
    
    const archiveTask = (id) => {
        const taskDoc = doc(db, 'tasks', id);
        updateDoc(taskDoc, {
            archived: true,
        });
    };

    return (
        <div className="checkbox-holder" data-testid="checkbox-action"
        onClick={() => archiveTask(id)}>
            <span className="checkbox"></span>
        </div>
    )
};