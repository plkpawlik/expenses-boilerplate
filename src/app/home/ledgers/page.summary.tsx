// types
import { BillInfo } from "@/contexts/types/bill.info";
import { MdFavoriteBorder } from "react-icons/md";

export function Summary(props: { bills: BillInfo[] }) {
	// component logic
	const numBills = props.bills.length;
	const sumSpend = summarize(props.bills, "User 1");

	// component layout
	return (
		<div className="stats m-4 overflow-visible shadow">
			<div className="stat">
				<div className="stat-title">You have spend</div>
				<div className="stat-value text-primary">$ {sumSpend}</div>
				<div className="stat-desc">On {numBills} active ledgers</div>
				<div className="stat-figure text-primary">
					<MdFavoriteBorder className="text-4xl" />
				</div>
			</div>
		</div>
	);
}

function summarize(bills: BillInfo[], userID: string): number {
	let balance = 0;

	for (const bill of bills) {
		for (const yyyyMM of Object.keys(bill.balance)) {
			balance += bill.balance[yyyyMM][userID];
		}
	}

	return balance;
}
