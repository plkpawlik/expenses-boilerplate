import { ClassNameValue, twMerge } from "tailwind-merge";

export function PageWrapper(
	props: React.PropsWithChildren & {
		className: ClassNameValue;
	},
) {
	// component logic

	// component layout
	return (
		<article
			className={twMerge(
				"relative flex-1 overflow-y-auto overflow-x-hidden",
				props.className,
			)}
		>
			{props.children}
		</article>
	);
}
