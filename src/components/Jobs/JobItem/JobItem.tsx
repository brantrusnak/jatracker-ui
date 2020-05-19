import React from 'react';
import { Job } from '../../../models/Job';
import './JobItem.css';

interface Props {
    job: Job
}

export const JobItem: React.FC<Props> = ({job}) => {
    return (
        <div className="job">
            <div className="job-company"> Company: {job.company} </div>
            <div className="job-position"> Position: {job.position} </div>
            <div className="job-status"> Status: {job.status} </div>
            <div className="job-notes"> Notes: {job.notes} </div>
            {job.resume ? <div className="job-resume"> ResumeId: {job.resume.$oid} </div> : null}
            {job.coverletter ? <div className="job-coverletter"> CoverletterId: {job.coverletter.$oid} </div> : null}
        </div>
    )
};