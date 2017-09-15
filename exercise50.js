function build2D(num) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push([]);
		for (let j = 0; j < num; j++) {
			arr[i].push(i * num + j + 1);
		}
	}
	return arr;
}
