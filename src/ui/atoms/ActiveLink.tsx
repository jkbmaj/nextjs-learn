"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export function ActiveLink<T extends string>({
	href,
	className,
	activeClassName,
	children,
}: {
	href: Route<T> | URL;
	className: string;
	activeClassName: string;
	children: ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
}
