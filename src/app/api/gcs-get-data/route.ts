import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js'

export async function GET(params: NextRequest) {
    try {
        const supabase = createClient(process.env.URL as string, process.env.KEY as string)
        const { data, error } = await supabase
            .from('GCS')
            .select()

        if (error)
            throw error

        const response = NextResponse.json({
            message: "Success to get data from Supabase 2 - [1]",
            state: true,
            data: data
        }, { status: 200 });

        // Disable caching
        response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate, private, proxy-revalidate');

        return response;
    }
    catch (err) {
        return NextResponse.json({
            message: "Fail to get data",
            state: false,
        }, { status: 500 });
    }
}
