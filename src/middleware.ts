import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limiter";

export async function middleware(req: NextRequest) {
	const ip = req.ip ?? "127.0.0.1";

	try {
		const { success } = await rateLimiter.limit(ip);

		if (!success) new NextResponse("You are writing messages too fast.");
		return NextResponse.next();
	} catch (error) {
		return new NextResponse(
			"Sorry, the server is not responding. Please try again later."
		);
	}
}

export const config = {
	matcher: "/api/message/:path*",
};
