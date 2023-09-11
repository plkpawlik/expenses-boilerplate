"use client";

import { InputMonth } from "@/widgets/input/input.month";
import { PageWrapper } from "@/widgets/page/page.wrapper";
import { useState } from "react";

export default function () {
	// component hooks
	const [date, setDate] = useState(new Date());

	// component logic

	// component layout
	return (
		<PageWrapper className="flex flex-col items-stretch gap-2 p-2">
			<InputMonth update={setDate} value={date} />
		</PageWrapper>
	);
}
