import { ID } from "./util/id";

export interface BillInfo extends ID {
	members: string[];
	balance: {
		[yyyyMM: string]: {
			[userID: string]: number;
		};
	};
	timestampCreated: Date;
	timestampUpdated: Date;
	timestampValidTo: Date;
	title: string;
}
