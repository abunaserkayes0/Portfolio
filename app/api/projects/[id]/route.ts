import { getStaticProjectById } from "@/data/projects"
import { NextResponse } from "next/server";

export const GET = async (_request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const project = await getStaticProjectById(id);
    return NextResponse.json(project);
}
