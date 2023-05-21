import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import Wrapper from './Wrapper'

const Home = ({ setResult }) => {
  const [fullName, setFullName] = useState('')
  const [currentPosition, setCurrentPosition] = useState('')
  const [currentLength, setCurrentLength] = useState(1)
  const [currentTechnologies, setCurrentTechnologies] = useState('')
  const [headshot, setHeadshot] = useState(null)
  const [companyInfo, setCompanyInfo] = useState([{ name: '', position: '' }])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleAddCompany = () =>
    setCompanyInfo([...companyInfo, { name: '', position: '' }])

  const handleRemoveCompany = (index) => {
    const list = [...companyInfo]
    list.splice(index, 1)
    setCompanyInfo(list)
  }
  const handleUpdateCompany = (e, index) => {
    const { name, value } = e.target
    const list = [...companyInfo]
    list[index][name] = value
    setCompanyInfo(list)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('headshotImage', headshot, headshot.name)
    formData.append('fullName', fullName)
    formData.append('currentPosition', currentPosition)
    formData.append('currentLength', currentLength)
    formData.append('currentTechnologies', currentTechnologies)
    formData.append('workHistory', JSON.stringify(companyInfo))
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/resume/create`, formData, {})
      .then((res) => {
        if (res.data.message) {
          setResult(res.data.data)
          navigate('/resume')
        }
      })
      .catch((err) => console.error(err))
    setLoading(true)
  }
  if (loading) {
    return (
      <Loading
        loadingMessage={
          'Loading... Please wait while AI robots do the heavy lifting building a resume for you'
        }
      />
    )
  }
  return (
    <Wrapper>
      <>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Build your Resume with AI
        </h2>
        <form
          onSubmit={handleFormSubmit}
          method="POST"
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
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Full Name
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        required
                        name="fullName"
                        id="fullName"
                        autoComplete="Full Name"
                        value={fullName}
                        placeholder="Enter your Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                        className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="currentPosition"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Current Role
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="text"
                        required
                        name="currentPosition"
                        id="currentPosition"
                        value={currentPosition}
                        placeholder="Enter your Current Role"
                        onChange={(e) => setCurrentPosition(e.target.value)}
                        className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="currentLength"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Years Employed in Current Role
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex max-w-lg rounded-md shadow-sm">
                      <input
                        type="number"
                        required
                        name="currentLength"
                        id="currentLength"
                        value={currentLength}
                        onChange={(e) => setCurrentLength(e.target.value)}
                        className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="currentTechnologies"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Technologies Used
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <textarea
                      required
                      id="currentTechnologies"
                      name="currentTechnologies"
                      rows={3}
                      value={currentTechnologies}
                      placeholder="Javascript, TypeScript, React, Git, JIRA"
                      onChange={(e) => setCurrentTechnologies(e.target.value)}
                      className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      List the tech that helps you achieve kung fu master
                      levels.
                    </p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="file"
                      name="photo"
                      required
                      id="photo"
                      accept="image/x-png,image/jpeg"
                      className="text-sm text-grey-500
                      file:mr-5 file:py-2 file:px-6
                      file:rounded-full file:border-0
                      file:text-sm file:font-medium
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:cursor-pointer hover:file:bg-amber-50
                      hover:file:text-amber-700"
                      onChange={(e) => setHeadshot(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-2">
              <div className="pt-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Companies you've worked at
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  List your current and past roles
                </p>
              </div>

              <div className="">
                {companyInfo.map((company, index) => (
                  <div
                    className=""
                    key={index}>
                    <div className="flex align-middle space-x-2 justify-center w-full">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="block min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleUpdateCompany(e, index)}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Position Held
                      </label>
                      <input
                        type="text"
                        name="position"
                        required
                        className="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleUpdateCompany(e, index)}
                      />
                    </div>
                    <div className="flex space-x-2 h-9 align-center mt-7">
                    {companyInfo.length > 1 && (
                      <button
                        id="deleteBtn"
                        className="rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        onClick={() => handleRemoveCompany(index)}>
                        Del
                      </button>
                    )}
                    </div>
                  </div>
                  <div className="flex mt-4 w-full h-9">
                      {companyInfo.length - 1 === index &&
                        companyInfo.length < 4 && (
                          <button
                            id="addBtn"
                            className="rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            onClick={handleAddCompany}>
                            Add Company
                          </button>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create Resume
              </button>
            </div>
          </div>
        </form>
      </>
    </Wrapper>
  )
}

export default Home
