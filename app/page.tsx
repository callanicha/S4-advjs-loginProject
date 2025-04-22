import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pastel-100 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                Hello, Martinnnnn
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              ADV JS , log in & Sign up Project (EPITA Project)
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/login">
                <Button className="rounded-full bg-white text-primary hover:bg-white/90 border border-primary">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="rounded-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">I want to decorate this project</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">One</h3>
                <p className="text-muted-foreground">
                  I dont know what to put tho
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Two</h3>
                <p className="text-muted-foreground">Sorry for late submission ;-; </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Three</h3>
                <p className="text-muted-foreground">Thank you for the course.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-t from-pastel-100 to-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-8">
            Guess my favorite color base on this project.
          </p>
          <Link href="/signup">
            <Button className="rounded-full px-8">Sign Up Now</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
