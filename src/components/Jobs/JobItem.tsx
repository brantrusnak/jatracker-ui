import React from 'react';
import { Job } from '../../models/Job';

interface Props {
    job: Job
}

export const JobItem: React.FC<Props> = ({job}) => {
    return (
        <div>{job.company} - {job.position} - {job.status} - {job.notes}</div>
    )
};