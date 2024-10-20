import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'

export async function GET(params: NextRequest) {
    try {
        const supabase = createClient(process.env.URL as string, process.env.KEY as string)
        const { data, error } = await supabase
            .from('GCS')
            .select()

        const response = NextResponse.json({
            message: "Success to get data from Supabase - [1]",
            state: true,
            data: data
        }, { status: 200 });

        // Disable caching
        response.headers.set('Cache-Control', 'no-store');

        return response;
    }
    catch (err) {
        return NextResponse.json({
            message: "Fail to get data",
            state: false,
        }, { status: 500 });
    }
}
