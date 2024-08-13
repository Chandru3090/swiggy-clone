export const formatCurrency = (currency, currentcyStyle, amount) => {
    return new Intl.NumberFormat(currency, currentcyStyle).format(amount);
};