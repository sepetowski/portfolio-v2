export const scrolltoHash = (
	elementid: string,
	block: 'center' | 'end' | 'start' | 'nearest' = 'center'
) => {
	const element = document.getElementById(elementid);
	element?.scrollIntoView({ behavior: 'smooth', block, inline: 'nearest' });
};
