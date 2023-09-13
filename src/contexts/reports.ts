import { BillInfo } from "@/types/bill.info";
import { create } from "zustand";

export const useReportsContext = create<{
	list: BillInfo[];
}>(() => ({
	list: [],
}));

fetch("/mock/reports.json")
	.then((res) => res.json())
	.then((raw) => {
		if (!Array.isArray(raw)) return;

		const list = raw.map(
			(data): BillInfo => ({
				...data,
				timestampCreated: new Date(data.timestampCreated),
				timestampUpdated: new Date(data.timestampUpdated),
				timestampValidTo: new Date(data.timestampValidTo),
			}),
		);

		useReportsContext.setState({ list });
	});
