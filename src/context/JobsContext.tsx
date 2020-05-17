import React, { createContext, useReducer, Dispatch } from "react";
import { Job } from "../models/Job";

export type JobsActions = { type: 'FETCH_JOBS' } | { type: 'FETCH_JOBS_SUCCESS', payload: Job[] } | { type: 'FETCH_JOBS_ERROR' };

interface JobsState {
    isLoading: boolean;
    isError: boolean;
    jobs: Job[];
}

interface JobsContextProps {
    state: JobsState;
    dispatch: Dispatch<JobsActions>;
}

const initialJobsState: JobsState = {
    isLoading: true,
    isError: false,
    jobs: []
};

const contextState: JobsContextProps = {
    state: initialJobsState,
    dispatch: (value: JobsActions) => {}
}

const JobsContext = createContext<JobsContextProps>(contextState);

const JobsProvider = ({children}: any) => {
    const [state, dispatch] = useReducer((state: JobsState, action: JobsActions) => {
        switch (action.type) {
            case "FETCH_JOBS":
                return {
                    ...state,
                    jobs: [],
                    isLoading: true,
                    isError: false
                }
            case "FETCH_JOBS_SUCCESS":
                return {
                    ...state,
                    jobs: action.payload,
                    isLoading: false,
                    isError: false
                }
            case "FETCH_JOBS_ERROR":
                return {
                    ...state,
                    jobs: [],
                    isLoading: false,
                    isError: true
                }
            default:
                return state;
        }
    }, initialJobsState);
    return <JobsContext.Provider value={{state, dispatch}}>{children}</JobsContext.Provider>;
};

export { JobsContext, JobsProvider }