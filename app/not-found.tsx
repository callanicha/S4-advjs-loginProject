import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-pastel-100 to-white">
      <div className="text-center space-y-6">
        <Heart className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-9xl font-bold text-primary/20">404</h1>
        <h2 className="text-3xl font-bold tracking-tight text-primary">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link href="/">
          <Button className="rounded-full">Return to Home</Button>
        </Link>
      </div>
    </main>
  )
}
