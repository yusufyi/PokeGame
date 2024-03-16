import { ChessBoard } from "@/components/ChessBoard";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <ChessBoard />
      <Link href="/">Home</Link>
    </div>
  );
}
