import { useContext } from "react";
import { GET } from "../shared/http";
import { JobsContext } from "../context/JobsContext";

export const useJobsHandler = () => {
    const jobs = useContext(JobsContext);
    
    const handleRequest = async () => {
        jobs.dispatch({type: 'FETCH_JOBS'});
        let jobsData = await GET('http://localhost:5000/api/jobs');
        jobs.dispatch({type: 'FETCH_JOBS_SUCCESS', payload: jobsData});
    };

    return { handleRequest };
};