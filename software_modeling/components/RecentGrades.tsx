import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const grades = [
  { id: 1, course: "Mathematics", assignment: "Midterm Exam", grade: "A-" },
  { id: 2, course: "Physics", assignment: "Lab Report 3", grade: "B+" },
  { id: 3, course: "Computer Science", assignment: "Project 2", grade: "A" },
  { id: 4, course: "English Literature", assignment: "Essay 1", grade: "B" },
]

export function RecentGrades() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Grades</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {grades.map((grade) => (
            <li key={grade.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{grade.course}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400">{grade.assignment}</p>
              </div>
              <span className="text-lg font-semibold">{grade.grade}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

