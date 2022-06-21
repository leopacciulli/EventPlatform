import { useQuery } from "@apollo/client";
import { GET_LESSONS_QUERY } from "./queries/lessons";

interface Lesson {
  id: string;
  title: string;
}

export const App = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id} >{lesson.title}</li>
      ))}
    </ul>
  )
}