'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { categories } from "@/lib/categories"

export function BulletinBoard() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center h-20">
          <h1 className="text-3xl font-extrabold text-gray-900">SUTDents</h1>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* 
              Grid layout breakpoints:
              - Below md (768px): 1 column (top-down)
              - md to lg: 2 columns side by side
              - lg (1024px) and above: 3 columns side by side
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="h-16 flex items-center justify-center">
                      <h2 className="text-lg font-bold">
                        {category.emoji} {category.name}
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.links.map((link, linkIndex) => (
                        <Link href={link.url} key={linkIndex}>
                          <Button
                            variant="outline"
                            className="h-20 w-full text-sm sm:text-base md:text-sm lg:text-base flex items-center justify-center p-2 font-medium"
                          >
                            <span className="text-center overflow-wrap-break-word flex flex-col items-center"
                              style={{ overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}>
                              <span className="text-xl mb-1">{link.emoji}</span>
                              <span>{link.name}</span>
                            </span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <p className="text-gray-600 font-medium">
            Have a suggestion? <Link href="https://github.com/pyraxo/SUTDents/issues" target="_blank" className="text-blue-500">Open an issue!</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}