import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Activities</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Activities</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Activities</CardTitle>
              <CardDescription>View and manage all your academic activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Math Homework", "Physics Lab Report", "Programming Project", "Literature Essay"].map(
                  (activity, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-stone-100 rounded-lg dark:bg-stone-800">
                      <span>{activity}</span>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Activities</CardTitle>
              <CardDescription>Activities due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Math Homework", "Physics Lab Report", "Programming Project"].map((activity, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-stone-100 rounded-lg dark:bg-stone-800">
                    <span>{activity}</span>
                    <Button variant="outline" size="sm">
                      Mark as Complete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Activities</CardTitle>
              <CardDescription>Activities you've finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Literature Essay"].map((activity, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-stone-100 rounded-lg dark:bg-stone-800">
                    <span>{activity}</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

