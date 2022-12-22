export function setUrl() {
	const data = {
		dev: {
			baseUrl: "http://localhost:3000",
		},
	};

	return Object.freeze(data);
}
