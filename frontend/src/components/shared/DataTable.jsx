import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function DataTable({ columns, data }) {
  return (
    <>
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        columns.map( column => (
                            <TableHead key={column.key}>{column.label }</TableHead>
                        ) ) 
                    }
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    data.map( (item) => (
                        <TableRow key={item.id}>
                            { columns.map( (column) => (
                                <TableCell key={column.key}>
                                    { column.action ? column.action(item) : item[column.key]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>
  )
}

export default DataTable