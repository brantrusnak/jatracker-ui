export interface User {
    _id: { "$oid": string; };
    email: string;
    display_name: string;
    jobs: {$oid: string}[]
}