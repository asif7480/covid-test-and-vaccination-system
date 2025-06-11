import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function RecentVaccinatedPatients({ vaccinatedPatients }) {
    return (
        <>
            <Table>
                <TableCaption>A list of recent vaccinated patients.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Patient Name</TableHead>
                        <TableHead>Vaccine</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        vaccinatedPatients.map(( vaccinated) => (
                            <TableRow>
                                <TableCell className="font-medium">{vaccinated._id}</TableCell>
                                <TableCell>{vaccinated.name}</TableCell>
                                <TableCell>{vaccinated.vaccine}</TableCell>
                                <TableCell className="text-right">{vaccinated.date}</TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </>
    )
}

export default RecentVaccinatedPatients