import React from "react";
import { db } from '../firebase'
import { collection, query } from "firebase/firestore";

export const Checkbox = ({id}) => {
    const archiveTask = () => {
        query(
            collection(db, 'tasks'),
            doc(id),
            update({
                archived: true,
            })
        );
    };

    return (
        <div className="checkbox-holder" data-testid="checkbox-action"
        onClick={() => archiveTask()}>
            <span className="checkbox"></span>
        </div>
    )
};