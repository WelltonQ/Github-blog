import { Link, useParams } from 'react-router-dom'
import header from '../assets/header.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../service/api'
import Markdown from 'react-markdown'

interface Issues {
  title: string
  user: { login: string }
  created_at: string
  comments: number
  body: string
  html_url: string
}

export function Details() {
  const { number } = useParams()
  const [issues, setIssues] = useState<Partial<Issues>>({})
  const [loading, setLoading] = useState<boolean>(false)

  const getIssue = useCallback(async () => {
    setLoading(true)
    const { data } = await api.get(`/repos/welltonq/github-blog/issues/${number}`)
    setLoading(false)
    setIssues(data)
  },[number])

  function formatedDate() {
    const apiDate = new Date(`${issues.created_at}`);
    const currentDate = new Date();
  
    const timeDifference = currentDate.getTime() - apiDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const dayFormated = daysDifference > 1 ? 'dias' : 'dia'

    return `Há ${daysDifference} ${dayFormated}`
  }

  useEffect(() => {
    getIssue()
  }, [getIssue])


  return (
    <div className='bg-base-background h-full'>
      <header className='w-full z-0 relative'>
        <img src={header} alt="Logo do github no cabeçalho" />
      </header>

      <main className="max-w-[864px] mx-auto pb-60 px-4">
      
      {loading ? <span className='text-base-title text-3xl flex justify-center py-14'>Carregando...</span> : (
        <>
        <section className='flex px-10 py-8 bg-base-profile rounded-xl min-h-44 relative -mt-24 z-10'>
          <div className='flex flex-col w-full'>
            <div className='w-full flex justify-between items-center'>
              <div className='uppercase items-center text-xs text-sky-400 flex gap-2 no-underline hover:underline cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link to='/'>Voltar</Link>
              </div>
              <div className='uppercase items-center text-xs text-sky-400 flex gap-2 no-underline hover:underline cursor-pointer'>
                <Link to={`${issues.html_url}`} target="_blank">Ver no github</Link>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
            <h1 className='font-bold text-2xl text-base-title my-5'>{issues.title}</h1>
            <div className='flex gap-5 flex-wrap'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faGithub} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>{issues.user?.login}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faCalendarDay} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>{formatedDate()}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faComment} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>{issues.comments} comentários</span>
              </div>
            </div>
          </div>
        </section>

        <section className='px-8 py-10 text-base-text'>
          <Markdown>
            {issues.body}
          </Markdown>
        </section>
        </>
      )}

      </main>
    </div>
  )
}
