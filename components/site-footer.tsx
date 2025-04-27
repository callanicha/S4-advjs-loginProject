import Link from "next/link"
import { Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-4 w-4 fill-primary" />
            <p className="text-sm font-medium">ADV JS Project</p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} ADV JS Project. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-left mt-1">
            Created by Natthanicha VONGJARIT
          </p>
        </div>
        <nav className="flex gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
