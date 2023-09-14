import { BillBalance } from "./util/bill.balance";
import { DocumentID } from "./util/document.id";

export interface BillInfo extends DocumentID {
	balance: BillBalance;
	members: string[];
	timestampCreated: Date;
	timestampUpdated: Date;
	timestampValidTo: Date;
	title: string;
}
