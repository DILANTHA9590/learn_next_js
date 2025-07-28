// app/page.js or app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/homemain"); // ✅ Automatically redirect when this page is hit
}
