import { Status } from "./Status";

export interface Job {
    _id: {
        $oid: string
    };
    company: string;
    position: string;
    status: Status;
    notes: string;
    added_by: {
        $oid: string;
    }
}