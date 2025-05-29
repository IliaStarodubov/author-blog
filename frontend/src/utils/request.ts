export const request = (url: string, method?: string, data?: unknown) => {
	return fetch('/api' + url, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	}).then((response) => response.json());
};
