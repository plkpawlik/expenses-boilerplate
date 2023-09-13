export const numberFormat = new Intl.NumberFormat("en", { notation: "compact" });

export function formatNumber(number: number): string {
	return numberFormat.format(number);
}
