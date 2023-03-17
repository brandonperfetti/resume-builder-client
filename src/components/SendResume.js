import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import sendResume from './utils/util'
import Wrapper from './Wrapper'

const SendResume = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')
  const [recruiterName, setRecruiterName] = useState('')
  const [applicantName, setApplicantName] = useState('')
  const [recruiterEmail, setRecruiterEmail] = useState('')
  const [myEmail, setMyEmail] = useState('')
  const [resume, setResume] = useState(null)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    //👇🏻 form object
    const formData = new FormData()
    formData.append('resume', resume, resume.name)
    formData.append('companyName', companyName)
    formData.append('companyDescription', companyDescription)
    formData.append('jobTitle', jobTitle)
    formData.append('recruiterEmail', recruiterEmail)
    formData.append('recruiterName', recruiterName)
    formData.append('applicantName', applicantName)
    formData.append('myEmail', myEmail)
    //👇🏻 imported function
    sendResume(formData, setLoading, navigate)

    //👇🏻 states update
    setMyEmail('')
    setRecruiterEmail('')
    setRecruiterName('')
    setApplicantName('')
    setJobTitle('')
    setCompanyName('')
    setCompanyDescription('')
    setResume(null)
  }

  if (loading) {
    return (
      <Loading
        loadingMessage={
          'Loading... Please wait while AI robots do the heavy lifting crafting an email for you'
        }
      />
    )
  }

  return (
    <Wrapper>
      <>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Email your Resume to a Recruiter
        </h2>
        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="space-y-6 sm:space-y-5">
              <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Generate a resume with AI in few seconds by providing your
                  profile.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                    htmlFor="recruiterName">
                    Recruiter's Name
                  </label>
                  <input
                    type="text"
                    value={recruiterName}
                    placeholder="Enter the Recruiter's Name"
                    required
                    onChange={(e) => setRecruiterName(e.target.value)}
                    id="recruiterName"
                    className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                    htmlFor="recruiterEmail">
                    Recruiter's Email Address
                  </label>
                  <input
                    type="email"
                    value={recruiterEmail}
                    placeholder="Enter the Recruiter's Email"
                    required
                    onChange={(e) => setRecruiterEmail(e.target.value)}
                    id="recruiterEmail"
                    className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                    htmlFor="applicantName">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    placeholder="Enter your Full Name"
                    required
                    onChange={(e) => setApplicantName(e.target.value)}
                    id="applicantName"
                    className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                    htmlFor="myEmail">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={myEmail}
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setMyEmail(e.target.value)}
                    id="myEmail"
                    className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  htmlFor="jobTitle">
                  Position Applying For
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  placeholder="The Boss of Everything"
                  required
                  onChange={(e) => setJobTitle(e.target.value)}
                  id="jobTitle"
                  className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  htmlFor="companyName">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  placeholder="Enter the Company's Name"
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                  id="companyName"
                  className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  htmlFor="companyDescription">
                  Company Description
                </label>
                <textarea
                  rows={5}
                  className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  required
                  placeholder={`Breifly describe why you'd like to work for this company`}
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-y sm:border-gray-200 sm:py-5">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  htmlFor="resume">
                  Upload Resume
                </label>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  required
                  id="resume"
                  className="text-sm text-grey-500
                      file:mr-5 file:py-2 file:px-6
                      file:rounded-full file:border-0
                      file:text-sm file:font-medium
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:cursor-pointer hover:file:bg-amber-50
                      hover:file:text-amber-700"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>

              <div className="flex justify-center">
                <button className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  SEND EMAIL
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    </Wrapper>
  )
}

export default SendResume
