import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Calendar, Award, CheckCircle } from 'lucide-react'
import { certificates } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Certificates() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false
    return new Date(expiryDate) < new Date()
  }

  const getExpiryStatus = (expiryDate?: string) => {
    if (!expiryDate) return 'No expiry'
    
    const expiry = new Date(expiryDate)
    const now = new Date()
    const monthsUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)
    
    if (monthsUntilExpiry < 0) return 'Expired'
    if (monthsUntilExpiry < 6) return 'Expires soon'
    return 'Valid'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Valid':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Expires soon':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'No expiry':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Certificates & Credentials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and credentials that validate my expertise
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Certificates
            </div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {certificates.filter(cert => getExpiryStatus(cert.expiryDate) === 'Valid' || getExpiryStatus(cert.expiryDate) === 'No expiry').length}
            </div>
            <div className="text-sm text-muted-foreground">
              Active Certificates
            </div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {new Set(certificates.map(cert => cert.issuer)).size}
            </div>
            <div className="text-sm text-muted-foreground">
              Issuing Organizations
            </div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {new Date().getFullYear() - Math.min(...certificates.map(cert => new Date(cert.issueDate).getFullYear()))}
            </div>
            <div className="text-sm text-muted-foreground">
              Years of Learning
            </div>
          </Card>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => {
            const status = getExpiryStatus(certificate.expiryDate)
            
            return (
              <Card key={certificate.id} className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Certificate Image */}
                <CardHeader className="p-0 aspect-[4/3] relative overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Award className="h-16 w-16" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className={cn("font-medium", getStatusColor(status))}>
                      {status}
                    </Badge>
                  </div>
                  
                  {/* Verification Badge */}
                  {certificate.verificationUrl && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500 text-white hover:bg-green-600 gap-1 border-none">
                        <CheckCircle className="h-3 w-3" />
                        Verified
                      </Badge>
                    </div>
                  )}
                </CardHeader>

                {/* Certificate Content */}
                <CardContent className="p-6 flex-1">
                  <CardTitle className="text-xl font-bold mb-2">
                    {certificate.title}
                  </CardTitle>
                  <p className="text-lg text-primary font-medium mb-3">
                    {certificate.issuer}
                  </p>
                  
                  {certificate.description && (
                    <p className="text-muted-foreground mb-4 text-sm">
                      {certificate.description}
                    </p>
                  )}

                  {/* Certificate Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Issued: {formatDate(certificate.issueDate)}</span>
                    </div>
                    
                    {certificate.expiryDate && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>
                          {isExpired(certificate.expiryDate) ? 'Expired' : 'Expires'}: {formatDate(certificate.expiryDate)}
                        </span>
                      </div>
                    )}
                    
                    {certificate.credentialId && (
                      <div className="text-xs text-muted-foreground/60">
                        ID: {certificate.credentialId}
                      </div>
                    )}
                  </div>
                </CardContent>

                {/* Action Button */}
                <CardFooter className="p-6 pt-0 mt-auto">
                  {certificate.verificationUrl && (
                    <Button asChild className="w-full gap-2">
                      <Link
                        href={certificate.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Verify Certificate
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No certificates yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Certificates and credentials will be displayed here as they are earned.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and professional development. These certificates 
              represent my commitment to staying current with industry standards and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skills"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                View my skills
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View education
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
