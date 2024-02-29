import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export default function ToastService() {

  const { t } = useTranslation();

  function showInfoToast(title, message) {
    toast.info(title + ': ' + message);
  }

  function showErrorToast(message) {
    toast.error(t('ERROR.ERROR') + ': ' + message);
  }

  function showSuccessToast(message) {
    toast.success(message);
  }

  function showWarningToast(message) {
    toast.warn(message);
  }

  return {
    showInfoToast,
    showErrorToast,
    showSuccessToast,
    showWarningToast
  }
}