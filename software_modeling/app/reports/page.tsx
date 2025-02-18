import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Academic Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Activity Completion Rate</CardTitle>
            <CardDescription>Your progress over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] bg-stone-100 rounded-lg flex items-center justify-center dark:bg-stone-800">Chart Placeholder</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity Distribution</CardTitle>
            <CardDescription>Types of activities you're working on</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] bg-stone-100 rounded-lg flex items-center justify-center dark:bg-stone-800">Chart Placeholder</div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Overview of your academic performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Overall GPA</span>
                <span className="font-bold">3.8</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Completed Activities</span>
                <span className="font-bold">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Ongoing Activities</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Upcoming Deadlines</span>
                <span className="font-bold">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

