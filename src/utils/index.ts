export const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('en-gb', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'utc',
	});
};

export const formatLongText = (string: string) => {
	const shortText = string.split('');
	console.log(shortText);
};
