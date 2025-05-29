import { AppState } from '../reducers';

export const selectModalIsOpen = ({ app }: { app: AppState }) => app.modal.isOpen;
