import { getStaticStackData } from "@/data/stack"
import { NextResponse } from "next/server";

export const GET = async () => {
    const res = await getStaticStackData();
    return NextResponse.json(res);
}