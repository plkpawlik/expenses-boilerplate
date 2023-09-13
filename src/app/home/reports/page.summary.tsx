// @node
import { format } from "date-fns";
import { useMemo } from "react";

// @icon
import { MdBolt } from "react-icons/md";

// @root
import { getUserMonthly } from "@/tools/dissect.bill";
import { formatNumber } from "@/tools/format";
import { BillInfo } from "@/types/bill.info";

export function Summary(props: { bills: BillInfo[]; date: Date }) {
	// component logic
	const numBills = props.bills.length;
	const sumSpend = useMemo(() => {
		let sum = 0;

		for (const bill of props.bills) {
			sum += getUserMonthly(bill, "user1", props.date);
		}

		return sum;
	}, [props.bills, props.date]);

	const formatedDate = format(props.date, "LLLL yyyy");
	const formatedSpend = formatNumber(sumSpend);

	// component layout
	return (
		<div className="stats m-4 overflow-visible shadow">
			<div className="stat">
				<div className="stat-title">You have spend</div>
				<div className="stat-value text-secondary">$ {formatedSpend}</div>
				<div className="stat-desc">
					On {numBills} ledgers in {formatedDate}
				</div>
				<div className="stat-figure text-secondary">
					<MdBolt className="text-4xl" />
				</div>
			</div>
		</div>
	);
}
