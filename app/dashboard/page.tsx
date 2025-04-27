"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userInfo = localStorage.getItem("user")

    if (!token || !userInfo) {
      router.push("/login")
      return
    }

    try {
      const parsedUser = JSON.parse(userInfo)
      setUser(parsedUser)
    } catch (error) {
      console.error("Error parsing user info", error)
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (!user) {
    return <div className="flex-1 flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="flex-1 py-12 px-4 bg-gradient-to-b from-pastel-100 to-white">
      <div className="container max-w-4xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-primary/10 rounded-t-lg">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <CardTitle className="text-2xl">Welcome to your Dashboard</CardTitle>
            </div>
            <CardDescription>You are successfully logged in!</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h3 className="font-medium text-lg mb-4 text-primary">Your Profile</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">Name:</span>
                    <span>{user.name}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">Email:</span>
                    <span>{user.email}</span>
                  </p>
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h3 className="font-medium text-lg mb-4 text-primary">Account Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p>Active</p>
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-white shadow-sm">
                <h3 className="font-medium text-lg mb-4 text-primary">Actions</h3>
                <div className="space-y-2">
                  <Link href="/create-product">
                    <Button className="w-full rounded-full bg-primary text-white">
                      Create New Product
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              variant="outline"
              onClick={handleLogout}
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              Logout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}