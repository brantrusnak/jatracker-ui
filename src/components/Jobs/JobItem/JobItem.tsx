import React, { useContext } from 'react';
import { Job } from '../../../models/Job';
import './JobItem.css';
import { ModalContext } from '../../../context/ModalContext';
import { EditJobForm } from '../EditJobForm/EditJobForm';
import { Dropdown } from '../../Dropdown/Dropdown';
import { DropdownOption } from '../../../models/Dropdown';
import { DeleteJobConfirmation } from '../DeleteJobConfirmation/DeleteJobConfirmation';
import { PDFGET } from '../../../shared/http';

interface Props {
    job: Job
}

export const JobItem: React.FC<Props> = ({ job }) => {
    const modal = useContext(ModalContext);

    const dropdownOptions: DropdownOption[] = [
        {
            label: 'Edit',
            callback: () => {
                modal.dispatch({ type: 'LOAD', payload: { component: <EditJobForm job={job} />, title: 'Edit Job' } })
                modal.dispatch({ type: 'SHOW' });
            }
        },
        {
            label: 'Delete',
            callback: () => {
                modal.dispatch({ type: 'LOAD', payload: { component: <DeleteJobConfirmation job={job} />, title: 'Delete Job?' } })
                modal.dispatch({ type: 'SHOW' });
            }
        }
    ]

    const fetchResume = async () => {
        let pdf = await PDFGET(`http://localhost:5000/api/resume/${job._id.$oid}`) as Blob;
        window.open(window.URL.createObjectURL(pdf));
    };

    const fetchCoverletter = async () => {
        let pdf = await PDFGET(`http://localhost:5000/api/coverletter/${job._id.$oid}`) as Blob;
        window.open(window.URL.createObjectURL(pdf));
    };

    const files = <div className="files">
        {job.resume ? <div className="file-resume" onClick={fetchResume}> <i className="fas fa-file-pdf fa-2x"></i> Resume </div> : null}
        {job.coverletter ? <div className="file-coverletter" onClick={fetchCoverletter}> <i className="fas fa-file-pdf fa-2x"></i> Cover Letter </div> : null}
    </div>

    return (
        <div className="job">
            <div className="job-options">
                <Dropdown options={dropdownOptions}>
                    . . .
                </Dropdown>
            </div>
            <div className="job-heading">
                <span className="job-company">{job.company}</span>
                <span className="job-position">{job.position}</span>
                <span className={"job-status " + job.status.toLowerCase()}>{job.status}</span>
            </div>
            <div className="job-notes">
                <h3>Notes</h3>
                {job.notes}
            </div>
            {job.resume || job.coverletter ? files : null}
        </div>
    )
};