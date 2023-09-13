// @next
import Link from "next/link";

// @icon
import { MdAdd } from "react-icons/md";

export function Button() {
	// component logic

	// component layout
	return (
		<div className="sticky bottom-0 right-0 z-10 ml-auto mt-auto">
			<Link href="#" className="btn btn-circle btn-primary m-4 shadow">
				<MdAdd className="text-2xl text-base-100" />
			</Link>
		</div>
	);
}
