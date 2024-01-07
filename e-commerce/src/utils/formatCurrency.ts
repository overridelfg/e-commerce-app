const CURRANCY_FORMATTER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR" })

export const formatCurrency = (number: number) => {
    return CURRANCY_FORMATTER.format(number);
}