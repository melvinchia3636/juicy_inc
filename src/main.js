import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		primary: "#E59033",
		secondary: "#F6D9B2",
		tertiary: "#F1C087",
		quaternary: "#E89C48"
	}
});

export default app;