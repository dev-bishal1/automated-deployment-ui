import { toast } from 'react-toastify';

const showErrorMessage = (message: string) => toast.error(message);

const showSuccessMessage = (message: string) => toast.success(message);

export { showErrorMessage, showSuccessMessage };
