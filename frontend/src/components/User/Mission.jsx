import { CircleSmall } from 'lucide-react'
import React from 'react'

function Mission() {
    return (
        <section className="min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="py-8 rounded-md px-6  text-center">
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl underline underline-offset-8 decoration-blue-500">
                        Our Mission
                    </h1>
                    <p className="text-base sm:text-lg mt-6">
                        Dedicated to providing fast, accurate COVID-19 testing and reliable vaccination services to keep our community safe.
                    </p>
                </div>

                <div className="py-8 justify-self-center rounded-md px-6 ">
                    <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl my-4 underline underline-offset-8 decoration-blue-500">
                        What we offer
                    </h3>
                    <ul className="flex flex-col text-center gap-4">
                        <li className="flex items-center gap-2">
                            <CircleSmall className="text-blue-500" />
                            RT-PCR & Rapid Antigen Tests
                        </li>
                        <li className="flex items-center gap-2">
                            <CircleSmall className="text-blue-500" />
                            Vaccination for All Age Groups
                        </li>
                        <li className="flex items-center gap-2">
                            <CircleSmall className="text-blue-500" />
                            Same-day Appointments Available
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Mission
