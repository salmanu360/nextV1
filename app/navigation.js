import Link from "next/link";
import { LogIn } from "./LogIn";
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LogIn</Link>
        </li>
        <li />
      </ul>
    </nav>
  );
}
