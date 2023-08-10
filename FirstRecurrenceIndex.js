const recurIndex = str => {
	for (const [i, char] of [...(str || '')].entries()) {
		const j = str.indexOf(char);
		if (j < i) return { [char]: [j, i] };
	}
	return {};
};
