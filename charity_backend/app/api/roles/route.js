import connectMongoDB from "@/libs/mongodb";
import Roles from "@/models/role";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    let { name } = await req.json();
    console.log("name", name);
    await connectMongoDB();

    await Roles.create({ role:name, status: 1 });
    return NextResponse.json({ msg: "roles created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Error creating role",err }, { status: 500 });
  }
};
