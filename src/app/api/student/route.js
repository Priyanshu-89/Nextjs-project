import {NextResponse} from "next/server";

export async function GET(request){
    const newUser={
        name:"Ritu",
        roll:45,
        sem:"4th",
        fee:346765
    }
    return NextResponse.json(newUser)
}