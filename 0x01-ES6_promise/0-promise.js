export default function getResponseFromAPI() {
	const result = true;
	return new Promise((resolve, reject) => {
		if (result) {
			resolve();
		} else {
			reject();
		}
	});
}
