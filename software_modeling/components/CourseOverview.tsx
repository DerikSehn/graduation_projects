import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const courses = [
  { id: 1, name: "Mathematics", progress: 75 },
  { id: 2, name: "Physics", progress: 60 },
  { id: 3, name: "Computer Science", progress: 90 },
  { id: 4, name: "English Literature", progress: 40 },
]

export function CourseOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course.id}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{course.name}</span>
                <span className="text-sm font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

