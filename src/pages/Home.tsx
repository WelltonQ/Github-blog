import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import header from '../assets/header.jpg'
import { api } from '../service/api'
import { useDebounce } from '../hooks/useDebounce'

interface User {
  name: string
  login: string
  bio: string
  avatar_url: string
  html_url: string
  following: string
  company: string
}

interface Issues {
  title: string
  created_at: string
  body: string
  number: number
}

export function Home() {
  const [data, setData] = useState<Partial<User>>({})
  const [issues, setIssues] = useState<Issues[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const debouncedSearch = useDebounce(search)

  const getApiGithub = useCallback(async () => {
    setLoading(true)
    const user = await api.get('/users/welltonq')
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${debouncedSearch} repo:welltonq/github-blog`,
      }
    })
    setLoading(false)
    setData(user.data)
    setIssues(data.items)
  }, [debouncedSearch]) 

  function formatedDate(date: string) {
    const apiDate = new Date(`${date}`);
    const currentDate = new Date();
  
    const timeDifference = currentDate.getTime() - apiDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const dayFormated = daysDifference > 1 ? 'dias' : 'dia'

    return `Há ${daysDifference} ${dayFormated}`
  }

  useEffect(() => {
    getApiGithub()
  }, [getApiGithub])

  function diplayTextFormated(text: string, maxLenght: number) {
    const displayText = text.length > maxLenght ? `${text.slice(0, maxLenght)}...` : text

    return displayText
  }

  return (
    <div className='bg-base-background h-full'>
      <header className='w-full z-0 relative'>
        <img src={header} className='w-screen' alt="Logo do github no cabeçalho" />
      </header>

        <main className="max-w-[890px] mx-auto pb-60 px-4">
        {loading ? <span className='text-base-title text-3xl flex justify-center py-14'>Carregando...</span> : (
          <>
            <section className='flex-col md:flex-row flex justify-center px-10 py-8 bg-base-profile rounded-xl min-h-52 relative -mt-24 z-10 '>
              <img src={data.avatar_url} alt="Foto do perfil" className='object-cover mx-auto w-36 h-36 rounded-lg' />
              <div className='flex flex-col pl-0 pt-4 md:pt-0 md:pl-8 w-full'>
                <div className='flex justify-between items-center'>
                  <h1 className='font-bold text-2xl text-base-title'>{data.name}</h1>
                  <div className='text-xs text-sky-400 flex gap-2 no-underline hover:underline'>
                    <Link to={`${data.html_url}`} target="_blank">GITHUB</Link>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
                <p className='py-2 font-normal text-base-text'>{data.bio}</p>
                <div className='flex pt-2 gap-5'>
                  <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faGithub} className='text-base-label text-lg' />
                    <span className='text-base-subtitle text-base'>{data.login}</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBuilding} className='text-base-label text-lg' />
                    <span className='text-base-subtitle text-base'>{data.company}</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faUserGroup} className='text-base-label text-lg' />
                    <span className='text-base-subtitle text-base'>{data.following}</span>
                  </div>
                </div>
              </div>
            </section>

            <section className='mt-16'>
              <div className='flex justify-between'>
                <span className='text-white'>Publicações</span>
                <span className='text-base-span text-sm'>{issues.length} publicações</span>
              </div>
              <input onChange={e => setSearch(e.target.value)} value={search} type="text" placeholder='Buscar conteúdo' className='w-full mt-3 bg-base-input py-3 px-4 focus:outline-none focus:border-blue border-base-border border-2 rounded-md text-base-text' />
            </section>

            <section className='flex justify-center mt-12 gap-6 flex-wrap'>
              {issues.map((issue) => (
                <Link to={`/details/${issue.number}`} className='w-[416px] min-h-64 bg-base-post flex flex-col rounded-lg p-8 gap-4 hover:border-base-border border-2 border-base-post' key={issue.title}>
                  <div className='flex justify-between items-start'>
                    <h2 className='text-base-title text-xl max-w-[250px]'>{diplayTextFormated(issue.title, 30)}</h2>
                    <span className='text-base-span text-sm whitespace-nowrap pt-1'>{formatedDate(issue.created_at)}</span>
                  </div>
                  <Markdown className='text-base-text text-base'>{diplayTextFormated(issue.body, 180)}</Markdown>
                </Link>
            ))}
            </section>
          </>
        )}
        </main>
    </div>
  )
}
