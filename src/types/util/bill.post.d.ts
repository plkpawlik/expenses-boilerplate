export interface BillPost {
	timestampCreated: Date;
	userIDBelongsTo: string;
	userIDCreatedBy: string;
	post: {
		expenseCost: number;
		expenseName: string;
		expenseType: string;
		type: "expense";
	};
}
