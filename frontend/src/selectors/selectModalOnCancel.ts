import { AppState } from '../reducers';

export const selectModalOnCancel = ({ app }: { app: AppState }) => app.modal.onCancel;
