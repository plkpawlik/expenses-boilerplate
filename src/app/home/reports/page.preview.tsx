// @next
import Link from "next/link";

// @node
import { useMemo } from "react";

// @icon
import { MdOutlineForum } from "react-icons/md";

// @root
import { getUserMonthly } from "@/tools/dissect.bill";
import { formatNumber } from "@/tools/format";
import { BillInfo } from "@/types/bill.info";

export function Preview(props: { bills: BillInfo[]; date: Date }) {
	// component logic
	const label = (members: number): string => {
		if (members === 1) return "Only you";
		if (members === 2) return "You and someone else";

		return `You and ${members} other people`;
	};

	// component layout
	return (
		<div className="join join-vertical rounded-none">
			{props.bills.map((bill) => (
				<Link
					key={bill.id}
					href="#"
					className="btn btn-ghost join-item flex-1 flex-nowrap gap-2 p-2"
				>
					<PreviewAvatar bill={bill} />
					<div className="flex-1 overflow-hidden font-normal normal-case">
						<p className="truncate text-start text-lg">{bill.title}</p>
						<p className="truncate text-start text-sm">
							{label(bill.members.length)}
						</p>
					</div>
					<PreviewSummary bill={bill} date={props.date} />
				</Link>
			))}
		</div>
	);
}

function PreviewAvatar(props: { bill: BillInfo }) {
	// component logic

	// component layout
	return (
		<div className="avatar rounded-full bg-base-content p-3">
			<MdOutlineForum className="text-xl text-base-100" />
		</div>
	);
}

function PreviewSummary(props: { bill: BillInfo; date: Date }) {
	// component logic
	const sumSpend = useMemo(
		() => getUserMonthly(props.bill, "user1", props.date),
		[props.bill, props.date],
	);
	const formated = formatNumber(sumSpend);

	// component layout
	return <p className="text-xl font-bold text-secondary">{formated} $</p>;
}
