import React from 'react'

const Resume = () => {
  return (
    <div
      id="resume_section"
            className="flex flex-col items-center w-full py-10 my-10"
          >
            {/* <h1 className="my-5 mb-10 text-4xl font-bold text-center"> */}
            <h1 className="my-10 text-4xl text-center">
              RESUME 📄
            </h1>
            <a
              href="https://drive.google.com/file/d/1YPh7DkBsn1CSRg4aRnVKux0ruMaJm_iY/view?usp=drive_link"
              target="_blank"
              className="relative p-3 px-5 font-bold bg-green-600 rounded-full"
            >
              OPEN 🚀
            </a>
    </div>
  )
}

export default Resume
