import { Link } from 'react-router-dom'
import header from '../assets/header.jpg'
import Wellton from '../assets/wellton.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Home() {
  const maxLength = 200
  const text = 'Programming languages all have built-in all have built-in all have built-in all have built-in all have built-in  all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...'
  const displayText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text

  return (
    <div className='bg-base-background h-full'>
      <header className='w-screen z-0 relative'>
        <img src={header} alt="Logo do github no cabeçalho" />
      </header>

      <main className="max-w-[864px] mx-auto pb-60">
        <div className='flex px-10 py-8 bg-base-profile rounded-xl h-52 relative -mt-24 z-10 '>
          <img src={Wellton} alt="Foto do perfil" className='object-cover w-36 h-36 rounded-lg' />
          <div className='flex flex-col pl-8'>
            <div className='w-full flex justify-between items-center'>
              <strong className='text-2xl text-base-title'>Wellton Quirino</strong>
              <div className='text-xs text-sky-400 flex gap-2 no-underline hover:underline'>
                <Link to='https://github.com/welltonq' target="_blank">GITHUB</Link>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
            <p className='py-2 font-normal text-base-text max-w-[608px]'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <div className='flex pt-2 gap-5'>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faGithub} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>welltonq</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faBuilding} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>AcordeOn</span>
              </div>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faUserGroup} className='text-base-label text-lg' />
                <span className='text-base-subtitle text-base'>200 seguidores</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <div className='flex justify-between'>
            <span className='text-white'>Publicações</span>
            <span className='text-base-span text-sm'>6 publicações</span>
          </div>
          <input type="text" placeholder='Buscar conteúdo' className='w-full mt-3 bg-base-input py-3 px-4 focus:outline-none focus:border-blue border-base-border border-2 rounded-md text-base-label' />
        </div>

        <div className='flex justify-between mt-12 gap-8 flex-wrap'>
          <Link to={'/details'} className='w-[416px] h-64 bg-base-post flex flex-col rounded-lg p-8 gap-4 hover:border-base-border border-2 border-base-post'>
            <div className='flex justify-between items-start'>
              <strong className='text-base-title text-xl max-w-[250px]'>JavaScript data types and data structures</strong>
              <span className='text-base-span text-sm whitespace-nowrap pt-1'>Há 1 dia</span>
            </div>
            <p className='text-base-text text-base'>{displayText}</p>
          </Link>
          <Link to={'/details'} className='w-[416px] h-64 bg-base-post flex flex-col rounded-lg p-8 gap-4 hover:border-base-border border-2 border-base-post'>
            <div className='flex justify-between items-start'>
              <strong className='text-base-title text-xl max-w-[250px]'>JavaScript data types and data structures</strong>
              <span className='text-base-span text-sm whitespace-nowrap pt-1'>Há 1 dia</span>
            </div>
            <p className='text-base-text text-base'>{displayText}</p>
          </Link>
          <Link to={'/details'} className='w-[416px] h-64 bg-base-post flex flex-col rounded-lg p-8 gap-4 hover:border-base-border border-2 border-base-post'>
            <div className='flex justify-between items-start'>
              <strong className='text-base-title text-xl max-w-[250px]'>JavaScript data types and data structures</strong>
              <span className='text-base-span text-sm whitespace-nowrap pt-1'>Há 1 dia</span>
            </div>
            <p className='text-base-text text-base'>{displayText}</p>
          </Link>
          <Link to={'/details'} className='w-[416px] h-64 bg-base-post flex flex-col rounded-lg p-8 gap-4 hover:border-base-border border-2 border-base-post'>
            <div className='flex justify-between items-start'>
              <strong className='text-base-title text-xl max-w-[250px]'>JavaScript data types and data structures</strong>
              <span className='text-base-span text-sm whitespace-nowrap pt-1'>Há 1 dia</span>
            </div>
            <p className='text-base-text text-base'>{displayText}</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
