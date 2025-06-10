import Mission from '@/components/User/Mission'
import Topbar from '@/components/User/Topbar'
import { Activity, Clock, Smartphone, Stethoscope, Syringe } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <>
      <Topbar 
        title='About Us' 
        img={`https://www.asterhospitals.in/sites/default/files/styles/webp/public/2021-01/about-us-new.jpg.webp?itok=WCVIH3LP`}
      />
      <Mission />

      {/* Why Choose Us Section */}
      <section className="min-h-52 w-2/3 mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-4xl md:text-6xl text-center py-10 font-bold">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <Clock />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Fast & accurate testing</h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <Stethoscope />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Certified medical staff</h2>
              <p className="leading-relaxed text-base">
                We deliver test results quickly and reliably, minimizing stress and delays.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <Smartphone />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Digital results in 24 hours

              </h2>
              <p className="leading-relaxed text-base">
                Our medical professionals are certified, experienced, and community-trusted.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg h-full">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                <Syringe />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Government-approved vaccinations</h2>
              <p className="leading-relaxed text-base">
                Our centers are conveniently located and open to all age groups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
