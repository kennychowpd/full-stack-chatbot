import { Inter } from "next/font/google";
import Chat from "../components/Chat";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className='absolute inset-0 flex justify-center items-center'>
			<Toaster toastOptions={{ duration: 3500 }} position='top-right' />
			<Chat />
			Website content
		</main>
	);
}
