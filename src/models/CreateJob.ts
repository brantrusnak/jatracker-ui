import { Status } from "./Status";

export interface CreateJob {
    company: string;
    position: string;
    status: Status;
    notes: string;
    resume?: string | number | string[];
    coverletter?: string | number | string[];
}