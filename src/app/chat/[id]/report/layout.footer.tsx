// @next
import Link from "next/link";

// @icon
import { MdPictureAsPdf } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="navbar flex-nowrap gap-2 border-t pb-6">
			<ButtonDownladPDF href="#" />
		</footer>
	);
}

function ButtonDownladPDF(props: { href: string }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-ghost flex-1 font-normal normal-case">
			<MdPictureAsPdf className="mr-2 text-xl" />
			Downlad as PDF
		</Link>
	);
}
