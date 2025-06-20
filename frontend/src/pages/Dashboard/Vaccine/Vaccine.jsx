import DataTable from '@/components/shared/DataTable'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Vaccine() {
  const columns = [
    { key: "_id", label: "Id" },
    { key: "vaccineName", label: "Vaccine Name" },
    { key: "isAvailable", label: "Availability" },
    { key: "quantity", label: "Quantity" },
    {
      key: "actions",
      label: "Actions",
      action: (item) => (
        <div className="space-x-2">
          {/* <button className="text-blue-500">View</button> */}
          <Button>Update</Button>
          <Button variant={`destructive`}>Delete</Button>
          {/* <button className="text-red-500">Delete</button> */}
        </div>
      )
    }
  ]

  const data = [
    { _id: 1, vaccineName: "vaccine 1", isAvailable: "available", quantity: 10 },
    { _id: 2, vaccineName: "vaccine 2", isAvailable: "available", quantity: 10 },
    { _id: 3, vaccineName: "vaccine 3", isAvailable: "available", quantity: 10 },
    { _id: 4, vaccineName: "vaccine 4", isAvailable: "available", quantity: 10 },
  ]
  return (
    <>
      <h1 className='text-center py-10 text-4xl'>All Vaccines</h1>
      <div className="container w-7/8 mx-auto">
        {/* add new vaccine dialog */}
        <div>
          <Dialog>
            <form>
              <DialogTrigger className={`bg-blue-500 text-white outline-none hover:border-blue-500 hover:text-blue-500`} asChild>
                <Button variant="outline">Add New Vaccine</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Vaccine</DialogTitle>
                  {/* <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DialogDescription> */}
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="vaccineName">Vaccine Name</Label>
                    <Input id="vaccineName" name="vaccineName" placeholder="Vaccine name" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="isAvailable">Availability</Label>
                    <Input id="isAvailable" name="isAvailable" placeholder="isAvailable" />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" name="quantity" />
                  </div>

                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Add</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        {/* patients table */}
        <div className='py-10'>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  )
}

export default Vaccine