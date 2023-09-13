import { BillInfo } from "@/types/bill.info";
import { format } from "date-fns";

export function getUserMonthly(bill: BillInfo, userID: string, date: Date): number {
	const yyyyMM = format(date, "yyyy-MM");

	if (bill.balance[yyyyMM] && bill.balance[yyyyMM][userID]) {
		return bill.balance[yyyyMM][userID];
	} else {
		return 0;
	}
}

export function getUserSummary(bill: BillInfo, userID: string): number {
	let balance = 0;

	for (const yyyyMM of Object.keys(bill.balance)) {
		if (bill.balance[yyyyMM][userID]) balance += bill.balance[yyyyMM][userID];
	}

	return balance;
}
