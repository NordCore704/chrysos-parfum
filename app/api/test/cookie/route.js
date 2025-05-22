import { getToken } from "next-auth/jwt";

export async function GET(req) {
    const cookies = req.headers.get("cookie");
    console.log("Cookies:", cookies);
  
    const sessionToken = cookies?.includes("next-auth.session-token");
    console.log("Session Token Found:", sessionToken);
  
    // Check if cookies exist
    if (!cookies) {
      return new Response(JSON.stringify({ message: "No cookies found." }), {
        status: 401,
      });
    }
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log("AUTH_SECRET:", process.env.NEXTAUTH_SECRET);


    if (!token) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: No token found." }),
        { status: 401 }
      );
    }

    console.log("API Route: Token:", token);

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error: Unable to retrieve token." }),
      { status: 500 }
    );
  }
}
