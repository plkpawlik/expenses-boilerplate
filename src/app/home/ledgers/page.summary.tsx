// @node
import { useMemo } from "react";

// @icon
import { MdFavoriteBorder } from "react-icons/md";

// @root
import { getUserSummary } from "@/tools/dissect.bill";
import { formatNumber } from "@/tools/format";
import { BillInfo } from "@/types/bill.info";

export function Summary(props: { bills: BillInfo[] }) {
	// component logic
	const numBills = props.bills.length;
	const sumSpend = useMemo(() => {
		let sum = 0;

		for (const bill of props.bills) {
			sum += getUserSummary(bill, "user1");
		}

		return sum;
	}, [props.bills]);

	const formatedSpend = formatNumber(sumSpend);

	// component layout
	return (
		<div className="stats m-4 overflow-visible shadow">
			<div className="stat">
				<div className="stat-title">You have spend</div>
				<div className="stat-value text-primary">$ {formatedSpend}</div>
				<div className="stat-desc">On {numBills} active ledgers</div>
				<div className="stat-figure text-primary">
					<MdFavoriteBorder className="text-4xl" />
				</div>
			</div>
		</div>
	);
}
