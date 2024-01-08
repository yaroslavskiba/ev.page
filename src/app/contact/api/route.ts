import { paintings } from '@/api/api';

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  await paintings.sendMail(res);
  return Response.json({ res });
}
