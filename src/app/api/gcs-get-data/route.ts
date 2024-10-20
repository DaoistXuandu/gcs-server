import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(params: NextRequest) {
    try {
        const { data, error } = await supabase
            .from('GCS')
            .select()

        return NextResponse.json({
            message: "Succes to get data",
            state: true,
            data: data
        }, { status: 200 })
    }
    catch (err) {
        return NextResponse.json({
            message: "Fail to get data",
            state: false,
        })
    }
}