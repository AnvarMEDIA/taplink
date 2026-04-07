import { notFound, redirect } from "next/navigation";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import LoginForm from "./LoginForm";

interface Props {
  params: { token: string };
}

export default async function AdminPage({ params }: Props) {
  // Check secret token
  if (params.token !== process.env.ADMIN_SECRET_PATH) {
    notFound();
  }

  // If already logged in — go to dashboard
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (session.isAdmin) {
    redirect(`/admin/${params.token}/dashboard`);
  }

  return <LoginForm token={params.token} />;
}
