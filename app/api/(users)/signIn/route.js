import { logInUser } from "../routes";
export async function POST(request) {
  const data = await request.json();
  return logInUser(data);
}
