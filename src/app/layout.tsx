import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul>
						<li className="float-left mx-2">
							<ActiveLink
								href="/"
								className="text-blue-600"
								activeClassName="text-red-600"
							>
								Home
							</ActiveLink>
						</li>
						<li className="float-left mx-2">
							<ActiveLink
								href="/products"
								className="text-blue-600"
								activeClassName="text-green-600"
							>
								All
							</ActiveLink>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
