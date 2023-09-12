import { create } from "zustand";
import { BillInfo } from "./types/bill.info";

export const useReportsContext = create<{
	list: BillInfo[];
}>(() => ({
	list: [
		{
			id: "1",
			members: ["User 1", "User 2"],
			balance: {
				"2023-09": {
					"User 1": 100,
					"User 2": 150,
				},
			},
			timestampCreated: new Date("2023-08-01"),
			timestampUpdated: new Date("2023-09-01"),
			timestampValidTo: new Date("2023-09-30"),
			title: "Ledger template for a pair",
		},
		{
			id: "2",
			members: ["User 1"],
			balance: {
				"2023-08": {
					"User 1": 375,
				},
				"2023-09": {
					"User 1": 250,
				},
			},
			timestampCreated: new Date("2023-08-01"),
			timestampUpdated: new Date("2023-09-12"),
			timestampValidTo: new Date("2023-09-30"),
			title: "Ledger template just for me",
		},
		{
			id: "3",
			members: ["User 1", "User 2", "User 3", "User 4"],
			balance: {
				"2023-09": {
					"User 1": 50,
					"User 2": 100,
					"User 3": 150,
					"User 4": 200,
				},
			},
			timestampCreated: new Date("2023-08-01"),
			timestampUpdated: new Date("2023-09-10"),
			timestampValidTo: new Date("2023-09-30"),
			title: "Ledger template form many many people",
		},
		{
			id: "4",
			members: ["User 1", "User 2", "User 3", "User 4"],
			balance: {
				"2023-09": {
					"User 2": 100,
					"User 3": 150,
					"User 4": 200,
				},
			},
			timestampCreated: new Date("2023-08-01"),
			timestampUpdated: new Date("2023-09-10"),
			timestampValidTo: new Date("2023-09-30"),
			title: "Ledger template form many many people but without my expenses",
		},
	],
}));
