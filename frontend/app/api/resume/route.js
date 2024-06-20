import { readFile } from "fs/promises";
import path from "path";

//Call this route to download the resume file

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "public/OwenSzymanski_Resume.pdf")
  );

  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attatchment; filename="OwenSzymanski_Resume.pdf"'
  );
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
