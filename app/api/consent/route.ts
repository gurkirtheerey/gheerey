import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, consent, timestamp } = await request.json();

    const query = `
      INSERT INTO consent_records (name, consent, created_at)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const result = await pool.query(query, [name, consent, timestamp]);

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving consent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save consent record" },
      { status: 500 }
    );
  }
}
