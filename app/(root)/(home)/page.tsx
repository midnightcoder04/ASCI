import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <>
    <Image
      src="/asci2.jpg"
      width={1550}
      height={1000} 
      alt="asCi"
      style= {{borderRadius:'0%',
      border: '0px solid #fff'}}
    />
  <div className = "flex items-center h-56 min-h-full bg-slate-300"></div>
  <div className="flex mx-auto">
    <section className="flex relative w-screen height:[300] min-h-full max-md:pb-14 ">
      <div className="flex 1">
      <Image
        src="https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2019/november/computer-science-resume.jpg"
        width={750}
        height={400}
        alt="Mission"
        style = {{opacity : '100%'}}
      />
      <div className="opacity-80 p-3 bg-gradient-to-r from-blue-200 to-purple-500 rounded-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold">
        Mission
      </div>
      </div>
      <div className="flex-1 opacity-9 bg-gradient-to-r from-purple-500 to-blue-300 width:[750] height:[500]">
        <div className="max-w-prose mx-auto mt-8">
          <h1 className="text-8xl font-bold text-gray-800 mb-4">Our Mission</h1>
          <p className="text-2xl text-gray-800 pt-1">
          To equip graduates in the field of computer science with competent
          technical and analytical skills, innovative research capabilities and leadership potential.
          </p>
          <p className="text-2xl text-gray-800 pt-3">
          To instill graduates with integrity, discipline and ethics to work with
          commitment for the progress of the society.
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className = "flex items-center h-56 min-h-full bg-slate-300"></div>
  <div className="flex mx-auto">
    <section className="flex relative w-screen height:[300] min-h-full max-md:pb-14 ">
      
      <div className="flex-1 opacity-9 bg-gradient-to-r from-red-200 to-pink-700 width:[750] height:[500]">
        <div className="max-w-prose mx-auto mt-8">
          <h1 className="text-8xl font-bold text-gray-800 mb-4">Our Vision</h1>
          <p className="text-2xl text-gray-800 pt-1">
          To emerge as a department of global stature 
          in the field of computer science education, research and development.
          </p>
        </div>
      </div>
      <div className="flex 1">
      <Image
        src="/vision.png"
        width={750}
        height={600}
        alt="Vision"
        style = {{opacity : '100%'}}
      />
      <div className="opacity-80 p-3 bg-gradient-to-r from-red-200 to-pink-500
       rounded-lg absolute top-1/2 right-1 mr-32 mb-2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold">
        Vision
      </div>
      </div>
    </section>
  </div>
  <div>
    <section className="flex bg-gray-300 relative w-screen height:[300] min-h-full max-md:pb-14">
    <div className="mx-auto max-w-screen-lg mt-8 pt-14 pb-20">
          <h1 className="text-7xl font-bold text-gray-800 mb-4">ASCI ASSOCIATION Activities</h1>
          <p className="text-2xl text-gray-800 pt-1">
          Department association (ASCI) organized a workshop on Internet of Things (IoT) as part
          of Techno-Cultural fest (Advyka)
          </p>
          <p className="text-2xl text-gray-800 pt-3">
          ASCI ( Association of Computer Science and Information Technology) along withCoding
          Ninjas (www.codingninjas.in)and ISTE STUDENT CHAPTER- CEP conducted an
          one day workshop on basic of computer programming on March 2, 2019. CodeX :
          Introductory workshop to programming.
          </p>
        </div>
    </section>
  </div>
  </>
  )
}

export default Home