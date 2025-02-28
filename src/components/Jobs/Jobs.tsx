import React, { useEffect, useContext } from 'react';
import { useJobsHandler } from '../../effects/jobs';
import { JobsContext } from '../../context/JobsContext';
import { JobItem } from './JobItem/JobItem';
import './Jobs.css';
import { ModalContext } from '../../context/ModalContext';
import { CreateJobForm } from './CreateJobForm/CreateJobForm';

export const Jobs: React.FC = () => {
    const jobs = useContext(JobsContext);
    const modal = useContext(ModalContext);
    const { handleFetchJobs } = useJobsHandler();

    useEffect(() => {
        handleFetchJobs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadModal = () => {
        modal.dispatch({ type: 'LOAD', payload: { component: <CreateJobForm />, title: 'Create Job' } });
        modal.dispatch({ type: 'SHOW' });
    }

    return (
        <div className="container">
            <h1>{jobs.state.jobs.length} Jobs</h1>
            {jobs.state.isLoading && !jobs.state.isError ? <span>Loading...</span> : null}
            {!jobs.state.isLoading && jobs.state.isError ? <span>Error!</span> : null}
            <div className="jobs-container">
                {jobs.state.jobs.map(job => <JobItem key={job._id.$oid} job={job} />)}
            </div>
            <button className="light float" onClick={() => loadModal()}><i className="fas fa-plus fa-2x"></i></button>
        </div>
    )
};