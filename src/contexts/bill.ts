import { BillData } from "@/types/bill.data";
import { BillInfo } from "@/types/bill.info";
import { BillPost } from "@/types/util/bill.post";
import { create } from "zustand";

export const useBillContext = create<{
	billData: null | BillData;
	billInfo: null | BillInfo;
	load(id: string): void;
}>(() => ({
	billData: null,
	billInfo: null,
	load: loadMockData,
}));

async function loadMockData(id: string) {
	const billData: BillData = await fetch("/mock/bill.data.json")
		.then((res) => res.json())
		.then((raw) => {
			return {
				...raw,
				posts: raw.posts.map((data: BillPost) => ({
					...data,
					timestampCreated: new Date(data.timestampCreated),
				})),
			};
		});

	const billInfo: BillInfo = await fetch("/mock/bill.info.json")
		.then((res) => res.json())
		.then((raw) => {
			return {
				...raw,
				timestampCreated: new Date(raw.timestampCreated),
				timestampUpdated: new Date(raw.timestampUpdated),
				timestampValidTo: new Date(raw.timestampValidTo),
			};
		});

	useBillContext.setState({ billData, billInfo });
}
