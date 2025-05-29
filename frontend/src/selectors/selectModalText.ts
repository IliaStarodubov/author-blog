import { AppState } from '../reducers';

export const selectModalText = ({ app }: { app: AppState }) => app.modal.text;
