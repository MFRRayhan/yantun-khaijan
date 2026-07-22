import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

// COLLECTIONS
const feedbacksCollection = connect("feedbacks");

/**
 * @desc:   Fetch all feedbacks
 * @route:  GET/api/feedbacks
 * @access: Public
 */
export async function GET() {
  const result = await feedbacksCollection.find().toArray();

  return Response.json(result);
}

/**
 * @desc:   create a new feedback
 * @route:  POST/api/feedbacks
 * @access: Public
 */
export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please insert a valid message",
    });
  }

  const newFeedback = { message, createdAt: new Date().toISOString() };
  const result = await feedbacksCollection.insertOne(newFeedback);
  revalidatePath("/feedbacks");

  return Response.json(result);
}
