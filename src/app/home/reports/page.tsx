"use client";

import { ViewHome } from "@/widgets/view/view.home";
import { useState } from "react";
import { InputMonth } from "./page.input-month";

export default function () {
	// component hooks
	const [date, setDate] = useState(new Date());

	// component logic

	// component layout
	return (
		<ViewHome className="flex flex-col items-stretch gap-2 p-2">
			<InputMonth update={setDate} value={date} />
		</ViewHome>
	);
}
