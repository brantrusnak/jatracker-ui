export interface CreateJob {
    company: string;
    position: string;
    status: string;
    notes: string;
    resume?: File;
    coverletter?: File;
}