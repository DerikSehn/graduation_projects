import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  { id: 1, name: "Math Homework", dueDate: "2025-02-20", course: "Mathematics", priority: "high" },
  { id: 2, name: "Physics Lab Report", dueDate: "2025-02-23", course: "Physics", priority: "medium" },
  { id: 3, name: "Programming Project", dueDate: "2025-02-25", course: "Computer Science", priority: "high" },
  { id: 4, name: "Literature Essay", dueDate: "2025-02-28", course: "English Literature", priority: "low" },
]

export function UpcomingActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{activity.name}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400">{activity.course}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    activity.priority === "high"
                      ? "destructive"
                      : activity.priority === "medium"
                        ? "default"
                        : "secondary"
                  }
                >
                  {activity.priority}
                </Badge>
                <span className="text-sm">{new Date(activity.dueDate).toLocaleDateString()}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

