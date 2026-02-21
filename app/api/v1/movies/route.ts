import { NextResponse } from "next/server";
import { db } from "@/db";

// GET /api/v1/movies
// Public API Endpoint to fetch a list of movies
export const GET = async () => {
  try {
    const movies = await db
      .collection("movies")
      .find()
      // .find({
      //   ...(title && { title: { $regex: title, $options: "i" } }),
      //   ...(director && { director: { $regex: director, $options: "i" } }),
      //   ...(year && { year: year }),
      // })
      // .sort({ metacritic: -1 })
      .limit(50)
      .toArray()
      .catch((err) => {
        console.error("Database query error:", err);
        return [];
      });
    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies from database:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 },
    );
  }
};
