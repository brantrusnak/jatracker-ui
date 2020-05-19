import { useContext } from "react";
import { GET, POST, getAuthHeader } from "../shared/http";
import { JobsContext } from "../context/JobsContext";

export const useJobsHandler = () => {
    const jobs = useContext(JobsContext);
    
    const handleFetchJobs = async () => {
        jobs.dispatch({type: 'FETCH_JOBS'});
        let jobsData = await GET('http://localhost:5000/api/jobs');
        jobs.dispatch({type: 'FETCH_JOBS_SUCCESS', payload: jobsData});
    };

    const handleCreateJob = async (form: HTMLFormElement) => {
        let header = getAuthHeader();
        let body = new FormData(form);
        await POST('http://localhost:5000/api/jobs', body, header);
        handleFetchJobs();
    };

    return { handleFetchJobs, handleCreateJob };
};