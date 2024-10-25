import { getStaticProjectsData } from "@/data/projects"
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = await getStaticProjectsData();
    return NextResponse.json(data);
}