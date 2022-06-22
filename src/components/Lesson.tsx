import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr
  })
  
  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>
      
      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable
            ? (
              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
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

          <span className="uppercase text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  )
}