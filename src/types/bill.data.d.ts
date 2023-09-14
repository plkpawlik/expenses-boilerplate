import { BillPost } from "./util/bill.post";
import { BillStat } from "./util/bill.stat";

export interface BillData {
	posts: BillPost[];
	stats: BillStat[];
}
