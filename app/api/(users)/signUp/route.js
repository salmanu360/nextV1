import { registerUser } from "../routes";
export async function POST(request) {
  const data = await request.json();
  return  registerUser(data);
}
