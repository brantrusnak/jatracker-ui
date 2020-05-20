import React, { FormEvent } from 'react';
import { useJobsHandler } from '../../../effects/jobs';
import { JobForm } from '../JobForm/JobForm';

export const CreateJobForm: React.FC = () => {
    const { handleCreateJob } = useJobsHandler();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        await handleCreateJob(event.currentTarget);
    }

    return (
        <JobForm submitLabel="Create" handleSubmit={handleSubmit} />
    )
};