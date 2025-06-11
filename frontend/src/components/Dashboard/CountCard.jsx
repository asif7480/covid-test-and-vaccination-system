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
                    <CardTitle className={`text-2xl font-bold`}>{data.title}</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className={`text-right`}>
                    <p className="leading-10 text-xl  font-semibold">Count: {data.count}</p>
                </CardContent>
            </Card>
        </>
    )
}

export default CountCard