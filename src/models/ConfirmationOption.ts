export interface ConfirmationOption {
    label: string;
    type: 'Alert' | 'Light';
    callback: () => void;
}