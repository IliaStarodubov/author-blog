import { AppState } from '../reducers';

export const selectModalOnConfirm = ({ app }: { app: AppState }) => app.modal.onConfirm;
