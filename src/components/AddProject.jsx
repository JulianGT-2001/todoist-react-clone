import React, { useState } from "react";
import { db } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';
import { collection, addDoc } from 'firebase/firestore';

export const AddProject = ({ shouldShow = false }) => {
    const [ show, setShow ] = useState(shouldShow);
    const [ projectName, setProjectName ] = useState('');

    const projectId = generatePushId();
    const { setProjects } = useProjectsValue();

    const addProject = async () => {
        if (projectName) {
            try {
                await addDoc(collection(db, 'projects'), {
                    projectid: projectId,
                    name: projectName,
                    userid: 'b46d6cd2-d92b-4999-864b-2aeaf2cbf998'
                });
                setProjectName('');
                setProjects([]);
                setShow(false);
            } catch (error) {
                console.error('Error adding project:', error);
            }
        }
    };

    return (
        <div className="add-project" data-testid="add-project">
            { show && (
                <div className="add-project__input">
                    <input 
                        value={projectName}
                        onChange={e => setProjectName(e.target.value)}
                        className="add-project__name"
                        data-testid="project-name"
                        type="text"
                        placeholder="Name your project"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>
                    <span
                        data-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                data-testid="add-project-action"
                className="add-project__text"
                onClick={() => setShow(!show)}
            >
                Add Project
            </span>
        </div>
    )
}