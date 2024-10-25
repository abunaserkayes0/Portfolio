import { getStaticProjectById } from "@/data/projects"
import { NextResponse } from "next/server";

export const GET = async (_request, { params }) => {
    const id = params.id;
    const project = await getStaticProjectById(id);
    return NextResponse.json(project);
}
