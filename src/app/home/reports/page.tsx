"use client";

import { useReportsContext } from "@/contexts/reports";
import { ViewHome } from "@/widgets/view/view.home";
import { useState } from "react";
import { Stepper } from "./page.stepper";
import { Summary } from "./page.summary";

export default function () {
	// component hooks
	const reports = useReportsContext();

	// component logic
	const [date, setDate] = useState(new Date());

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch">
			<Stepper update={setDate} value={date} />
			<Summary bills={reports.list} date={date} />
		</ViewHome>
	);
}
