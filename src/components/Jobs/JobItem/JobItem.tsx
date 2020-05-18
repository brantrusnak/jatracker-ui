import React from 'react';
import { Job } from '../../../models/Job';
import './JobItem.css';

interface Props {
    job: Job
}

export const JobItem: React.FC<Props> = ({job}) => {
    return (
        <div className="job">
            <div className="job-company"> {job.company} </div>
            <div className="job-position"> {job.position} </div>
            <div className="job-status"> {job.status} </div>
            <div className="job-notes"> {job.notes} </div>
        </div>
    )
};