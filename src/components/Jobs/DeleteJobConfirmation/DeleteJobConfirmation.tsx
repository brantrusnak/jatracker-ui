import React, { useContext } from 'react';
import { Confirmation } from '../../Confirmation/Confirmation';
import { ConfirmationOption } from '../../../models/ConfirmationOption';
import { Job } from '../../../models/Job';
import { ModalContext } from '../../../context/ModalContext';
import { useJobsHandler } from '../../../effects/jobs';

interface Props {
    job: Job
}

export const DeleteJobConfirmation: React.FC<Props> = ({job}) => {
    const modal = useContext(ModalContext);
    const { handleDeleteJob } = useJobsHandler();
    const options: ConfirmationOption[] = [
        {
            label: 'Cancel',
            type: 'Light',
            callback: () => {
                modal.dispatch({type: 'HIDE'});
            }
        },
        {
            label: 'Delete',
            type: 'Alert',
            callback: async () => {
                await handleDeleteJob(job._id.$oid);
                modal.dispatch({type: 'HIDE'});
            }
        }
    ]
    return (
        <Confirmation options={options} />
    )
};