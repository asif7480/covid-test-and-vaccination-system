import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CountCard({ data }) {
   console.log(data)
    return (
        <>
            <Card className={`shadow-lg ${data.bgColor} text-white font-bold`}>
                <CardHeader>
                    <CardTitle className={`text-2xl font-bold flex gap-2 items-center`}>
                        <data.icon />
                        {data.title}
                    </CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className={`text-right`}>
                    <p className="leading-10 text-6xl  font-semibold">{data.count}</p>
                </CardContent>
            </Card>
        </>
    )
}

export default CountCard