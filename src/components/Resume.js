import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import ErrorPage from './ErrorPage'
import Wrapper from './Wrapper'

const Resume = ({ result }) => {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${result.fullName} Resume`,
    onAfterPrint: () => alert('Print Successful!')
  })

  //👇🏻 function that replaces the new line with a break tag
  const replaceWithBr = (string) => {
    return string.replace(/(\r\n|\n|\r)/gm, '<br>')
  }

  //👇🏻 returns an error page if the result object is empty
  if (JSON.stringify(result) === '{}') {
    return <ErrorPage />
  }

  console.log('result', result)

  return (
    <>
      <div className="w-2/3 p-6 mx-auto flex align-middle justify-center sticky top-0 bg-transparent space-x-2 z-30">
        <button
          className='rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'
          onClick={handlePrint}>
          Print Resume
        </button>
        <Link
          to="/send/resume"
          className="rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          Send via Email
        </Link>
      </div>{' '}
      <Wrapper>
        <main className="my-12" ref={componentRef}>
          <header className="flex align-middle justify-center p-7 bg-yellow-300 w-4/5 mx-auto">
            <div>
              <h1 className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {result.fullName}
              </h1>
              <p className="opacity-50 mb-6">
                {result.currentPosition} ({result.currentTechnologies})
              </p>
              <p className="opacity-50 font-bold">
                {result.currentLength}year(s) work experience
              </p>
            </div>
            <div className="w-3/8">
              <img
                src={result.image_url}
                alt={result.fullName}
                className="rounded-full sm:max-h-[11rem]"
              />
            </div>
          </header>
          <div className="w-4/5 mx-auto p-7 min-h-[calc(100vh-3rem)] whitespace-normal">
            <div className="divide-y divide-gray-200">
              <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900">
                PROFILE SUMMARY
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(result.objective)
                }}
                className="text-justify py-2"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900">
                WORK HISTORY
              </h2>
              {result.workHistory.map((work) => (
                <p className="text-justify py-2" key={work.name}>
                  <span className="font-bold">{work.name}</span> -{' '}
                  {work.position}
                </p>
              ))}
            </div>
            <div className="divide-y divide-gray-200">
              <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900">
                JOB PROFILE
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(result.jobResponsibilities)
                }}
                className="text-justify"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900">
                JOB RESPONSIBILITIES
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(result.keypoints)
                }}
                className="text-justify"
              />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default Resume
