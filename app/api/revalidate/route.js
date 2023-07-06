import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  const formattedDateTime = `${day}/${month} ${hour}:${minute}:${second}`;

  const path = "/";
  revalidatePath(path);
  return NextResponse.json({
    revalidated: true,
    date: formattedDateTime,
    page: path,
  });
}
