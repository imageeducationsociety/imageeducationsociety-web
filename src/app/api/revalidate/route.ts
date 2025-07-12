import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { _type } = body;

    // Revalidate based on document type
    if (_type === "brandDetails") {
      revalidateTag("brand");
    }

    return Response.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return Response.json({ message: "Error revalidating" }, { status: 500 });
  }
}
