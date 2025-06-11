import CountCard from "@/components/Dashboard/CountCard"

function Dashboard() {
  const data = [
    {
      title: "hospitals",
      count: 4,
      bgColor: "bg-purple-400",
    },
    {
      title: "Patients",
      count: 50,
      bgColor: "bg-slate-400"
    },
    {
      title: "Vaccines",
      count: 400,
      bgColor: "bg-indigo-400"
    },
    {
      title: "Covid Test Conduct",
      count: 100,
      bgColor: "bg-blue-400"
    },
    {
      title: "Vaccinated Patients",
      count: 20,
      bgColor: "bg-green-400"
    },
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
        
      </div>


    </>
  )
}

export default Dashboard