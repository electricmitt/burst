"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (segments.length === 0) {
      return []
    }

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)
      
      return {
        label,
        href: index === segments.length - 1 ? undefined : href
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
      <Link
        href="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.label} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          {breadcrumb.href ? (
            <Link
              href={breadcrumb.href}
              className="hover:text-foreground transition-colors"
            >
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">
              {breadcrumb.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
} 