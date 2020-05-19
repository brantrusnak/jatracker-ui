import React, { FormEvent } from 'react';
import { useJobsHandler } from '../../../effects/jobs';

export const CreateJobForm: React.FC = () => {
    const { handleCreateJob } = useJobsHandler();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        await handleCreateJob(event.currentTarget);
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" required />

            <label htmlFor="position">Position</label>
            <input type="text" name="position" required />

            <label htmlFor="status">Status</label>
            <input type="text" name="status" required />

            <label htmlFor="notes">Notes</label>
            <input type="text" name="notes" required />

            <label htmlFor="resume">Resume</label>
            <input type="file" accept="application/pdf" name="resume" />

            <label htmlFor="coverletter">Cover Letter</label>
            <input type="file" accept="application/pdf" name="coverletter" />

            <input className="primary" type="submit" value="Submit" />
        </form>
    )
};