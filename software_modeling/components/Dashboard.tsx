import { CourseOverview } from "@/components/CourseOverview"
import Navbar from "@/components/Navbar"
import { RecentGrades } from "@/components/RecentGrades"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UpcomingActivities } from "@/components/UpcomingActivities"
import { AlertCircle, BarChart, BookOpen, Clock, PlusCircle } from "lucide-react"

export default function Dashboard() {
  return (<>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-card border-b">
          <div className="flex items-center">
            <Navbar />
            <h1 className="text-2xl font-bold ml-4">Dashboard</h1>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Activity
          </Button>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Your upcoming activities and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <span className="text-2xl font-bold">4</span>
                    <span className="text-sm text-muted-foreground">Active Courses</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-secondary/10 rounded-lg">
                    <Clock className="h-8 w-8 text-secondary mb-2" />
                    <span className="text-2xl font-bold">7</span>
                    <span className="text-sm text-muted-foreground">Upcoming Tasks</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-accent/10 rounded-lg">
                    <AlertCircle className="h-8 w-8 text-accent mb-2" />
                    <span className="text-2xl font-bold">2</span>
                    <span className="text-sm text-muted-foreground">Overdue Tasks</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <BarChart className="h-8 w-8 mb-2" />
                    <span className="text-2xl font-bold">3.8</span>
                    <span className="text-sm text-muted-foreground">GPA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <UpcomingActivities />
            <CourseOverview />
            <RecentGrades />
          </div>
        </main>
      </div>
  </>
  )
}

