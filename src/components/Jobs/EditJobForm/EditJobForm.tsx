import React, { FormEvent, useContext } from 'react';
import { useJobsHandler } from '../../../effects/jobs';
import { JobForm } from '../JobForm/JobForm';
import { Job } from '../../../models/Job';
import { ModalContext } from '../../../context/ModalContext';

interface Props {
    job: Job
}

export const EditJobForm: React.FC<Props> = ({job}) => {
    const modal = useContext(ModalContext);
    const { handleUpdateJob } = useJobsHandler();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>, job?: Job) => {
        event.stopPropagation();
        event.preventDefault();
        if(job?._id.$oid) {
            await handleUpdateJob(event.currentTarget, job._id.$oid);
            modal.dispatch({type: 'HIDE'});
        }
    }

    return (
        <JobForm job={job} submitLabel="Update" handleSubmit={handleSubmit} />
    )
};