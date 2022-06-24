import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames';

interface LessonProps {
  title: string;
  lessonSlug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = ({ title, lessonSlug, availableAt, type }: LessonProps) => {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr
  })

  const isActiveLesson = slug === lessonSlug;
  
  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable
            ? (
              <span className={classNames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson
              })}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            )
            : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )
          }

          <span className={classNames('uppercase text-xs rounded px-2 py-[0.125rem] text-white border font-bold', {
            'border-white': isActiveLesson,
            'border-green-500': !isActiveLesson
          })}>
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}