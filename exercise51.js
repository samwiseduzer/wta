function build2DWithIdx(num) {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push([]);
		for (let j = 0; j < num; j++) {
			arr[i].push(i.toString() + j.toString());
		}
	}
	return arr;
}
