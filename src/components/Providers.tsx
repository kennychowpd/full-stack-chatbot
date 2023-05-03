"use client";

import { MessagesProvider } from "@/context/messages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useState } from "react";

interface ProvidersProps {
	children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	const [queryClient] = useState(()=> new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<MessagesProvider>{children}</MessagesProvider>
		</QueryClientProvider>
	);
};

export default Providers;
