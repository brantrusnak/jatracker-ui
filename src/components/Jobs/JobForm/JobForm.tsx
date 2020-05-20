import React, { useState } from 'react';
import { CreateJob } from '../../../models/CreateJob';
import { Job } from '../../../models/Job';

interface Props {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, job?: Job) => void,
    submitLabel: string;
    job?: Job
}

export const JobForm: React.FC<Props> = ({ job, submitLabel, handleSubmit }) => {
    const [form, setForm] = useState<CreateJob>({
        company: job?.company || '',
        position: job?.position || '',
        status: job?.status || 'Send',
        notes: job?.notes || ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    return (
        <form encType="multipart/form-data" onSubmit={(event) => handleSubmit(event, job)}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" required value={form.company} onChange={handleInputChange} />

            <label htmlFor="position">Position</label>
            <input type="text" name="position" required value={form.position} onChange={handleInputChange} />

            <label htmlFor="status">Status</label>
            <select name="status" onChange={handleInputChange} value={form.status}>
                <option value="Send">Send</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
            </select> 

            <label htmlFor="notes">Notes</label>
            <textarea name="notes" required value={form.notes} onChange={handleInputChange} />

            <label htmlFor="resume">Resume</label>
            <input type="file" accept="application/pdf" name="resume" />

            <label htmlFor="coverletter">Cover Letter</label>
            <input type="file" accept="application/pdf" name="coverletter" />

            <input className="primary" type="submit" value={submitLabel} />
        </form>
    )
}