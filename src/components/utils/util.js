import emailjs from '@emailjs/browser'
import axios from 'axios'

const sendResume = (formData, setLoading, navigate) => {
  setLoading(true)

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/resume/send`, formData, {})
    .then((res) => {
      if (res.data.message) {
        console.log('res', res)
        const {
          cover_letter,
          recruiter_email,
          my_email,
          applicant_name,
          resume
        } = res.data.data
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
              cover_letter,
              applicant_name,
              recruiter_email,
              my_email,
              resume
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
          )
          .then((res) => {
            if (res.status === 200) {
              setLoading(false)
              alert('Message sent!')
              navigate('/')
            }
          })
          .catch((err) => console.error(err))
      }
    })
    .catch((err) => console.error(err))
}
export default sendResume
