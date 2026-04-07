import { notFound, redirect } from "next/navigation";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import { getContent } from "@/lib/content";
import DashboardClient from "./DashboardClient";

interface Props {
  params: { token: string };
}

export default async function DashboardPage({ params }: Props) {
  if (params.token !== process.env.ADMIN_SECRET_PATH) {
    notFound();
  }

  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isAdmin) {
    redirect(`/admin/${params.token}`);
  }

  const content = await getContent();

  return <DashboardClient initialContent={content} token={params.token} />;
}
