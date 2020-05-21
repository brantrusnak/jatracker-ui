import React, { FormEvent, useContext } from 'react';
import { useJobsHandler } from '../../../effects/jobs';
import { JobForm } from '../JobForm/JobForm';
import { ModalContext } from '../../../context/ModalContext';

export const CreateJobForm: React.FC = () => {
    const modal = useContext(ModalContext);
    const { handleCreateJob } = useJobsHandler();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        await handleCreateJob(event.currentTarget);
        modal.dispatch({type: 'HIDE'});
    }

    return (
        <JobForm submitLabel="Create" handleSubmit={handleSubmit} />
    )
};