"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StickyNote, Search, Tags, CheckCircle2, ArrowRight } from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <StickyNote className="w-4 h-4 text-background" />
            </div>
            <span className="font-semibold text-foreground">Notes</span>
          </div>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Organize your thoughts,
            <br />
            one note at a time
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            A simple and intuitive notes application to help you capture ideas,
            track tasks, and stay organized. Create, search, and manage your notes
            with ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/notes">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Track Status</h3>
              <p className="text-sm text-muted-foreground">
                Keep track of your notes with status labels: pending, in progress,
                or completed. Stay on top of your tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quick Search</h3>
              <p className="text-sm text-muted-foreground">
                Find any note instantly with powerful search. Filter by status
                to focus on what matters most.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <Tags className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Organize with Tags</h3>
              <p className="text-sm text-muted-foreground">
                Add multiple tags to categorize your notes. Work, personal,
                urgent - organize your way.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          A simple notes application built with Next.js
        </div>
      </footer>
    </div>
  )
}
