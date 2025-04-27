"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

interface Product {
  id: string
  name: string
  price: number
  description: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/products`)
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error("Failed to fetch products", err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="flex-1 py-12 bg-gradient-to-b from-pastel-100 to-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Products</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p>${product.price}</p>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
