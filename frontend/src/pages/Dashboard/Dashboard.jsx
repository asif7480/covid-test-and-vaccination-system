import CountCard from "@/components/Dashboard/CountCard"
import RecentVaccinatedPatients from "@/components/Dashboard/RecentVaccinatedPatients"
import { Hospital, ShieldUser, Syringe, TestTubeDiagonal, Users } from "lucide-react"

function Dashboard() {
  const data = [
    {
      title: "hospitals",
      count: 4,
      bgColor: "bg-purple-400",
      icon: Hospital
    },
    {
      title: "patients",
      count: 50,
      bgColor: "bg-slate-400",
      icon: Users,
    },
    {
      title: "vaccines",
      count: 400,
      bgColor: "bg-indigo-400",
      icon: Syringe,
    },
    {
      title: "covid test conduct",
      count: 100,
      bgColor: "bg-blue-400",
      icon: TestTubeDiagonal,
    },
    {
      title: "vaccinated patients",
      count: 20,
      bgColor: "bg-green-400",
      icon: ShieldUser,
    },
  ]

  const vaccinatedPatients = [
    {
      _id: "akslkasg242242",
      name: "Patient One",
      vaccine: "Sinovac",
      date: "2024-05-19"
    },
    {
      _id: "akslkasg242242",
      name: "Patient Two",
      vaccine: "Sinopharm",
      date: "2024-05-19"
    },
    {
      _id: "akslkasg242242",
      name: "Patient Three",
      vaccine: "Pfizer",
      date: "2024-05-19"
    },
    {
      _id: "akslkasg242242",
      name: "Patient Four",
      vaccine: "Moderna",
      date: "2024-05-19"
    }
  ]

  return (
    <>
      <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 w-5/6 mx-auto py-10 gap-10">
          {
            data.map((d, i) => (
              <CountCard key={i} data={d} />
            ))
          }
        </section>

        {/* recent pages */}
        <section className="container mx-auto w-5/6 py-10">
          <h2 className="text-center underline underline-offset-4 decoration-blue-500 text-2xl md:text-4xl py-10 font-semibold">Latest Vaccinated Patients</h2>
          <RecentVaccinatedPatients vaccinatedPatients={vaccinatedPatients}/>
        </section>
      </div>


    </>
  )
}

export default Dashboard