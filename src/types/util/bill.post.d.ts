export interface BillPost {
	timestampCreated: Date;
	userIDBelongsTo: string;
	userIDCreatedBy: string;
	post: {
		expenseCost: number;
		expenseName: number;
		expenseType: number;
		type: "expense";
	};
}
