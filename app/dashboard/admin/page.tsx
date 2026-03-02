'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { FileText, LogOut, Plus, Trash2 } from 'lucide-react'

export default function AdminPanel() {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [coordinators, setCoordinators] = useState<any[]>([])
  const [hods, setHods] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [newCoordinator, setNewCoordinator] = useState({ email: '', fullName: '', department: '' })
  const [newHOD, setNewHOD] = useState({ email: '', fullName: '', department: '' })
  const [showCoordinatorDialog, setShowCoordinatorDialog] = useState(false)
  const [showHODDialog, setShowHODDialog] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('currentUser')
    if (!user || JSON.parse(user).role !== 'admin') {
      router.push('/auth/login')
      return
    }

    setCurrentUser(JSON.parse(user))

    // Load existing staff from localStorage
    const savedCoordinators = localStorage.getItem('coordinators')
    const savedHODs = localStorage.getItem('hods')

    if (savedCoordinators) {
      setCoordinators(JSON.parse(savedCoordinators))
    }
    if (savedHODs) {
      setHods(JSON.parse(savedHODs))
    }

    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    router.push('/auth/login')
  }

  const addCoordinator = () => {
    if (!newCoordinator.email || !newCoordinator.fullName || !newCoordinator.department) {
      alert('Please fill in all fields')
      return
    }

    const coordinator = {
      id: Date.now().toString(),
      ...newCoordinator,
      role: 'coordinator',
      createdAt: new Date().toISOString(),
    }

    const updated = [...coordinators, coordinator]
    setCoordinators(updated)
    localStorage.setItem('coordinators', JSON.stringify(updated))
    setNewCoordinator({ email: '', fullName: '', department: '' })
    setShowCoordinatorDialog(false)
  }

  const addHOD = () => {
    if (!newHOD.email || !newHOD.fullName || !newHOD.department) {
      alert('Please fill in all fields')
      return
    }

    const hod = {
      id: Date.now().toString(),
      ...newHOD,
      role: 'hod',
      createdAt: new Date().toISOString(),
    }

    const updated = [...hods, hod]
    setHods(updated)
    localStorage.setItem('hods', JSON.stringify(updated))
    setNewHOD({ email: '', fullName: '', department: '' })
    setShowHODDialog(false)
  }

  const deleteCoordinator = (id: string) => {
    const updated = coordinators.filter(c => c.id !== id)
    setCoordinators(updated)
    localStorage.setItem('coordinators', JSON.stringify(updated))
  }

  const deleteHOD = (id: string) => {
    const updated = hods.filter(h => h.id !== id)
    setHods(updated)
    localStorage.setItem('hods', JSON.stringify(updated))
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">LeaveHub</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h2>
          <p className="text-gray-600">Manage coordinators and HODs for the system</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Coordinators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{coordinators.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total HODs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{hods.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="coordinators" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="coordinators">Class Coordinators</TabsTrigger>
            <TabsTrigger value="hods">Head of Departments</TabsTrigger>
          </TabsList>

          {/* Coordinators Tab */}
          <TabsContent value="coordinators">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Class Coordinators</CardTitle>
                    <CardDescription>Manage class coordinators for all departments</CardDescription>
                  </div>
                  <Dialog open={showCoordinatorDialog} onOpenChange={setShowCoordinatorDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Coordinator
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add New Coordinator</DialogTitle>
                        <DialogDescription>Enter coordinator details</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="coord-email">Email Address</Label>
                          <Input
                            id="coord-email"
                            type="email"
                            placeholder="coordinator@mits.ac.in"
                            value={newCoordinator.email}
                            onChange={(e) => setNewCoordinator({ ...newCoordinator, email: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="coord-name">Full Name</Label>
                          <Input
                            id="coord-name"
                            placeholder="John Doe"
                            value={newCoordinator.fullName}
                            onChange={(e) => setNewCoordinator({ ...newCoordinator, fullName: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="coord-dept">Department</Label>
                          <Select value={newCoordinator.department} onValueChange={(value) => setNewCoordinator({ ...newCoordinator, department: value })}>
                            <SelectTrigger id="coord-dept">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Computer Science">Computer Science & Engineering</SelectItem>
                              <SelectItem value="Electrical">Electrical Engineering</SelectItem>
                              <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
                              <SelectItem value="Civil">Civil Engineering</SelectItem>
                              <SelectItem value="Electronics">Electronics Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button onClick={addCoordinator} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Add Coordinator
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {coordinators.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No coordinators added yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {coordinators.map((coordinator) => (
                      <div key={coordinator.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <div>
                          <h4 className="font-semibold text-gray-900">{coordinator.fullName}</h4>
                          <p className="text-sm text-gray-600">{coordinator.email}</p>
                          <p className="text-sm text-gray-500 mt-1">{coordinator.department}</p>
                        </div>
                        <button
                          onClick={() => deleteCoordinator(coordinator.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* HODs Tab */}
          <TabsContent value="hods">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Head of Departments</CardTitle>
                    <CardDescription>Manage HODs for all departments</CardDescription>
                  </div>
                  <Dialog open={showHODDialog} onOpenChange={setShowHODDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add HOD
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Add New HOD</DialogTitle>
                        <DialogDescription>Enter HOD details</DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="hod-email">Email Address</Label>
                          <Input
                            id="hod-email"
                            type="email"
                            placeholder="hod@mits.ac.in"
                            value={newHOD.email}
                            onChange={(e) => setNewHOD({ ...newHOD, email: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hod-name">Full Name</Label>
                          <Input
                            id="hod-name"
                            placeholder="Dr. Jane Smith"
                            value={newHOD.fullName}
                            onChange={(e) => setNewHOD({ ...newHOD, fullName: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hod-dept">Department</Label>
                          <Select value={newHOD.department} onValueChange={(value) => setNewHOD({ ...newHOD, department: value })}>
                            <SelectTrigger id="hod-dept">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Computer Science">Computer Science & Engineering</SelectItem>
                              <SelectItem value="Electrical">Electrical Engineering</SelectItem>
                              <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
                              <SelectItem value="Civil">Civil Engineering</SelectItem>
                              <SelectItem value="Electronics">Electronics Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button onClick={addHOD} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Add HOD
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {hods.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No HODs added yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {hods.map((hod) => (
                      <div key={hod.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <div>
                          <h4 className="font-semibold text-gray-900">{hod.fullName}</h4>
                          <p className="text-sm text-gray-600">{hod.email}</p>
                          <p className="text-sm text-gray-500 mt-1">{hod.department}</p>
                        </div>
                        <button
                          onClick={() => deleteHOD(hod.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
