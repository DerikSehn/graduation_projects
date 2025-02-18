"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Calendar, BookOpen, BarChart2, Settings, LogOut } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Activities", href: "/activities", icon: Calendar },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col h-full">
          <div className="flex-1 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t py-6">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)}>
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

