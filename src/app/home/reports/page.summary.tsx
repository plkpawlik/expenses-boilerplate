import { BillInfo } from "@/contexts/types/bill.info";
import { format } from "date-fns";
import { MdBolt } from "react-icons/md";

export function Summary(props: { bills: BillInfo[]; date: Date }) {
	// component logic
	const formated = format(props.date, "LLLL yyyy");
	const numBills = props.bills.length;
	const sumSpend = summarize(props.bills, props.date, "User 1");

	// component layout
	return (
		<div className="stats m-4 overflow-visible shadow">
			<div className="stat">
				<div className="stat-title">You have spend</div>
				<div className="stat-value text-secondary">$ {sumSpend}</div>
				<div className="stat-desc">
					On {numBills} ledgers in {formated}
				</div>
				<div className="stat-figure text-secondary">
					<MdBolt className="text-4xl" />
				</div>
			</div>
		</div>
	);
}

function summarize(bills: BillInfo[], date: Date, userID: string): number {
	let balance = 0;

	for (const bill of bills) {
		if (bill.balance[format(date, "yyyy-MM")]) {
			if (!bill.balance[format(date, "yyyy-MM")][userID]) continue;

			balance += bill.balance[format(date, "yyyy-MM")][userID];
		}
	}

	return balance;
}
