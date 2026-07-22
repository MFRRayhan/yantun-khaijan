import { feedbacks } from "../route";

export async function GET() {
  return Response.json(feedbacks);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please insert a valid message",
    });
  }

  const newFeedback = { id: feedbacks.length + 1, message };
  feedbacks.push(newFeedback);

  return Response.json({
    acknowledgment: true,
    insertedCount: 1,
  });
}
