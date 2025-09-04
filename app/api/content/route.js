let contentItems = [
  {
    id: 1,
    title: "Welcome Message",
    type: "text",
    content: "Hello passengers! Enjoy your ride.",
    schedule: "2025-09-04T12:00",
  },
];

let nextId = 2;

export async function GET() {
  return Response.json(contentItems);
}

export async function POST(req) {
  try {
    const newItem = await req.json();
    newItem.id = nextId++;
    contentItems.push(newItem);

    return Response.json({
      message: "Content added successfully",
      item: newItem,
    });
  } catch (error) {
    return new Response("Invalid request", { status: 400 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    contentItems = contentItems.filter((item) => item.id !== id);

    return Response.json({ message: `Content with id ${id} deleted` });
  } catch (error) {
    return new Response("Invalid request", { status: 400 });
  }
}
