import { getServerSession } from "next-auth"
import { UnifiedHome } from "../components/unified-home"

export default async function HomePage() {
  const session = await getServerSession()

  return <UnifiedHome session={session} />
}


