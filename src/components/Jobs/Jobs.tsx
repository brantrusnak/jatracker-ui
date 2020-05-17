import React, { useEffect, useContext } from 'react';
import { useJobsHandler } from '../../effects/jobs';
import { JobsContext } from '../../context/JobsContext';
import { JobItem } from './JobItem';

export const Jobs: React.FC = () => {
    const jobs = useContext(JobsContext);
    const { handleRequest } = useJobsHandler();
    
    useEffect(() => {
        handleRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {jobs.state.isLoading && !jobs.state.isError ? <span>loading</span> : null}
            {!jobs.state.isLoading && jobs.state.isError ? <span>error</span> : null}
            {jobs.state.jobs.map(job => <JobItem key={job._id.$oid} job={job} />)}
        </div>
    )
};