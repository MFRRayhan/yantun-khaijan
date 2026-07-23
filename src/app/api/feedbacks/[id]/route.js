import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const feedbacksCollection = connect("feedbacks");

/**
 * @desc:   Fetch a feedback
 * @route:  GET/api/feedbacks/:id
 * @access: Public
 */
export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Invalid ID",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.findOne(query);
  revalidatePath("/feedbacks");

  return Response.json(result);
}

/**
 * @desc:   Delete a feedback
 * @route:  DELETE/api/feedbacks/:id
 * @access: Public
 */
export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Invalid ID",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.deleteOne(query);
  revalidatePath("/feedbacks");

  return Response.json(result);
}

/**
 * @desc:   Update a feedback
 * @route:  PATCH/api/feedbacks
 * @access: Public
 */
export async function PATCH(request, { params }) {
  const { message } = await request.json();
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const update = {
    $set: {
      message,
    },
  };
  const result = await feedbacksCollection.updateOne(query, update);
  revalidatePath("/feedbacks");

  return Response.json(result);
}
