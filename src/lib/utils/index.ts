export const addCurrencyCommas = (amount: number) => {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
