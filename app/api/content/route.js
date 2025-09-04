let contentItems = [
  {
    title: "Welcome Message",
    type: "text",
    content: "Hello passengers! Enjoy your ride.",
    schedule: "2025-09-04T12:00",
  },
];

export async function GET() {
  return Response.json(contentItems);
}

export async function POST(req) {
  try {
    const newItem = await req.json();
    contentItems.push(newItem);

    return Response.json({
      message: "Content added successfully",
      item: newItem,
    });
  } catch (error) {
    return new Response("Invalid request", { status: 400 });
  }
}
