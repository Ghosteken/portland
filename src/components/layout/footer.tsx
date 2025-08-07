import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((link) => {
            const IconComponent = socialIcons[link.icon as keyof typeof socialIcons]
            if (!IconComponent) return null

            return (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">{link.platform}</span>
                <IconComponent className="h-5 w-5" aria-hidden="true" />
              </Link>
            )
          })}
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-left flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-t">
        <div className="container py-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link href="/web3" className="text-muted-foreground hover:text-foreground transition-colors">
              Web3
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
