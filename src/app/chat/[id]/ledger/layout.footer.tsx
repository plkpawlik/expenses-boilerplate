// @next

// @icon
import Link from "next/link";
import { MdAttachMoney, MdSend } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="navbar flex-nowrap place-items-end gap-2 border-t pb-6">
			<ButtonPost href="#" />
			<Textarea update={() => {}} value="" />
			<ButtonSend action={() => {}} />
		</footer>
	);
}

function ButtonPost(props: { href: string }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-circle btn-primary btn-sm">
			<MdAttachMoney className="text-xl text-base-100" />
		</Link>
	);
}

function ButtonSend(props: { action(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="btn btn-circle btn-ghost btn-sm"
			onClick={props.action}
			type="button"
		>
			<MdSend className="text-xl text-primary" />
		</button>
	);
}

function Textarea(props: { update(value: string): void; value: string }) {
	// component logic
	const autoAdjustRows = (e: React.FormEvent<HTMLTextAreaElement>) => {
		e.currentTarget.style.height = `${0}px`;
		e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
		e.currentTarget.scroll({
			top: e.currentTarget.scrollHeight,
		});
	};

	// component layout
	return (
		<textarea
			className="textarea textarea-bordered textarea-sm flex-1 resize-none rounded-2xl text-base"
			onInput={autoAdjustRows}
			placeholder="Aa"
			style={{
				height: 32,
				minHeight: 32,
				maxHeight: 92,
			}}
		/>
	);
}
