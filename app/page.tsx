import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Clock, FileText, Users } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">LeaveHub</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Smart Leave Management
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Manage Your Leave Requests Effortlessly
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-balance">
              A streamlined platform for MITS students to submit, track, and manage leave requests. From student submission to coordinator approval to final HOD authorization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg">
                  Sign Up Now
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
              <Card className="relative border-blue-200 bg-white shadow-xl">
                <CardHeader className="border-b border-blue-100">
                  <CardTitle className="text-blue-900">Leave Request Status</CardTitle>
                  <CardDescription>Track your application in real-time</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Submitted</p>
                      <p className="text-sm text-gray-500">Your request is received</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Coordinator Review</p>
                      <p className="text-sm text-gray-500">Awaiting approval</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">HOD Approval</p>
                      <p className="text-sm text-gray-500">Pending</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple, transparent, and efficient leave management for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Student Submits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Create a new leave request with reason and dates. Our system validates your information and ensures all required details are provided.</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle>Coordinator Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Class coordinators review your request and provide feedback. They can approve, reject, or request more information from you.</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle>HOD Approves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">After coordinator approval, the HOD provides final authorization. You'll receive instant notifications at each step.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">For Everyone</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Whether you're a student, coordinator, or HOD, LeaveHub has you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <Card className="border-blue-300 bg-white">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍🎓</div>
                <CardTitle>For Students</CardTitle>
                <CardDescription>Seamless leave management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Easy signup with college email</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Real-time request tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">View approval history</span>
                </div>
              </CardContent>
            </Card>

            {/* Coordinators */}
            <Card className="border-blue-300 bg-white">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍💼</div>
                <CardTitle>For Coordinators</CardTitle>
                <CardDescription>Efficient approval workflow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Dashboard of pending requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Add comments and feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Forward to HOD with notes</span>
                </div>
              </CardContent>
            </Card>

            {/* HODs */}
            <Card className="border-blue-300 bg-white">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍🏫</div>
                <CardTitle>For HODs</CardTitle>
                <CardDescription>Final authorization made simple</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Review coordinator feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Make final decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Track all department requests</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join Madhav Institute of Technology and Science and streamline your leave management today.</p>
          <Link href="/auth/signup">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg">
              Sign Up for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-gray-900">LeaveHub</span>
            </div>
            <p className="text-gray-600 text-center md:text-right">
              © 2024 Madhav Institute of Technology and Science. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
