"use server";

import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function deleteFeedback(id) {
  const feedbacksCollection = connect("feedbacks");
  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.deleteOne(query);

  return result;
}

export async function updateFeedback(id, data) {
  const feedbacksCollection = connect("feedbacks");
  const query = { _id: new ObjectId(id) };
  const update = {
    $set: data,
  };
  const result = await feedbacksCollection.updateOne(query, update);

  return result;
}
