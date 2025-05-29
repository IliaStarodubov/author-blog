import { createRoot } from 'react-dom/client';
import Blog from './Blog.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.ts';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Blog />
		</BrowserRouter>
	</Provider>,
);
