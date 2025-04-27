"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check login status whenever the component mounts or pathname changes
    const user = localStorage.getItem("user")
    setIsLoggedIn(!!user)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Heart className="h-5 w-5 fill-primary" />
          <span>ADV JS Project</span>
        </Link>
        <nav className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="rounded-full hover:bg-primary/10">
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="rounded-full border-primary hover:bg-primary/10"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="rounded-full hover:bg-primary/10">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="rounded-full bg-primary hover:bg-primary/90">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
