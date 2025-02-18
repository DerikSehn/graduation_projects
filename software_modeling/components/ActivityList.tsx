import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityList({ activities }) {
  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p>No upcoming activities. Add some to get started!</p>
          </CardContent>
        </Card>
      ) : (
        activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
              <CardDescription>{activity.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Date: {new Date(activity.date).toLocaleDateString()}</p>
              <p>Priority: {activity.priority}</p>
              <p>Status: {activity.status}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

