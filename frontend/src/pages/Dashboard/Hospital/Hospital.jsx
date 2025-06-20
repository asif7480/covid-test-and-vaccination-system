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

function Hospital() {
  const columns = [
    { key: "_id", label: "Id" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "isApproved", label: "Approval Status" },
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
    { _id: 1, name: "hospital 1", email: "hospital1@gmail.com", isApproved: "Approved" },
    { _id: 2, name: "hospital 2", email: "hospital2@gmail.com", isApproved: "Approved" },
    { _id: 3, name: "hospital 3", email: "hospital3@gmail.com", isApproved: "Approved" },
    { _id: 4, name: "hospital 4", email: "hospital4@gmail.com", isApproved: "Approved" },
  ]
  return (
    <>
      <h1 className='text-center py-10 text-4xl'>All Hospitals</h1>
      <div className="container w-7/8 mx-auto">
        {/* add new hospital dialog */}
        <div>
          <Dialog>
            <form>
              <DialogTrigger className={`bg-blue-500 text-white outline-none hover:border-blue-500 hover:text-blue-500`} asChild>
                <Button variant="outline">Add New Hospital</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Hospital</DialogTitle>
                  {/* <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DialogDescription> */}
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Hospital name" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" placeholder="hospital email" />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" defaultValue="hospital" />
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

export default Hospital