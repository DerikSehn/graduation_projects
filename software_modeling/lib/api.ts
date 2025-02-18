import axios from "axios"

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

const api = axios.create({
  baseURL: `${strapiUrl}/api`,
})

export const fetchActivities = async () => {
  try {
    const response = await api.get("/activities")
    return response.data
  } catch (error) {
    console.error("Error fetching activities:", error)
    return []
  }
}

export const createActivity = async (activityData) => {
  try {
    const response = await api.post("/activities", { data: activityData })
    return response.data
  } catch (error) {
    console.error("Error creating activity:", error)
    throw error
  }
}

