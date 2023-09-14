export interface BillBalance {
	[yyyyMM: string]: {
		[userID: string]: number;
	};
}
