const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = 'john';
		console.log(greet + name);
	}
	return second;
}
const newFunc = first();
newFunc();