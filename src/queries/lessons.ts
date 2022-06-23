import { gql } from "@apollo/client"

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`

export const GET_LESSON_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`