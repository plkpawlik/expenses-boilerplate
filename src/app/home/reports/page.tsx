"use client";

// @node
import { format } from "date-fns";
import { useMemo, useState } from "react";

// @root
import { ViewHome } from "@/components/view/view.home";
import { useReportsContext } from "@/contexts/reports";

// @view
import { Stepper } from "./page.stepper";
import { Summary } from "./page.summary";

export default function () {
	// component hooks
	const reports = useReportsContext();

	// component logic
	const [date, setDate] = useState(new Date());

	const formatedDate = format(date, "yyyy-MM");
	const filteredList = useMemo(
		() => reports.list.filter((report) => report.balance[formatedDate]),
		[date, reports],
	);

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch">
			<Stepper update={setDate} value={date} />
			<Summary bills={filteredList} date={date} />
		</ViewHome>
	);
}
