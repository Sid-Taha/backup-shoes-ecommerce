"use client"

import { useState } from "react";
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image"

const mockCustomers = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "New York, USA",
    orders: 5,
    spent: 1499.99,
    joined: "2023-01-15",
    status: "active",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    location: "London, UK",
    orders: 12,
    spent: 2999.99,
    joined: "2022-11-02",
    status: "active",
  },
  {
    id: "CUST-003",
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Tokyo, Japan",
    orders: 2,
    spent: 499.99,
    joined: "2024-02-20",
    status: "new",
  },
  {
    id: "CUST-004",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    location: "Sydney, Australia",
    orders: 0,
    spent: 0.0,
    joined: "2024-03-01",
    status: "inactive",
  },
  {
    id: "CUST-005",
    name: "Alex Chen",
    email: "alex@example.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    location: "Singapore",
    orders: 8,
    spent: 1899.99,
    joined: "2023-06-10",
    status: "active",
  },
  {
    id: "CUST-006",
    name: "Emily Brown",
    email: "emily@example.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    location: "Toronto, Canada",
    orders: 3,
    spent: 799.99,
    joined: "2024-01-05",
    status: "new",
  },
  {
    id: "CUST-007",
    name: "David Lee",
    email: "david@example.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    location: "Seoul, South Korea",
    orders: 15,
    spent: 3499.99,
    joined: "2022-09-20",
    status: "active",
  },
  {
    id: "CUST-008",
    name: "Sophie Martin",
    email: "sophie@example.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    location: "Paris, France",
    orders: 6,
    spent: 1299.99,
    joined: "2023-11-30",
    status: "active",
  },
  {
    id: "CUST-009",
    name: "Ryan Taylor",
    email: "ryan@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    location: "Melbourne, Australia",
    orders: 1,
    spent: 199.99,
    joined: "2024-02-28",
    status: "new",
  },
  {
    id: "CUST-010",
    name: "Olivia Garcia",
    email: "olivia@example.com",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    location: "Barcelona, Spain",
    orders: 9,
    spent: 2199.99,
    joined: "2023-04-15",
    status: "active",
  },
]

export default function CustomersGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(mockCustomers.length / itemsPerPage);

  // Get paginated customers
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = mockCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Customers ({mockCustomers.length})
        </h1>
        <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
          Export
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10 w-full" />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentCustomers.map((customer) => (
          <Card
            key={customer.id}
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardHeader className="border-b p-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={customer.avatar}
                    alt={customer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold">{customer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{customer.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-2">
                <p className="text-sm">{customer.email}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="font-semibold">{customer.orders}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="font-semibold">${customer.spent.toFixed(2)}</p>
                </div>
              </div>
              <Badge
                variant={
                  customer.status === "active" ? "default" : 
                  customer.status === "new" ? "secondary" : "destructive"
                }
                className="w-full justify-center text-center py-1"
              >
                {customer.status.toUpperCase()}
              </Badge>
            </CardContent>
            <CardFooter className="border-t p-4">
              <p className="text-xs text-muted-foreground w-full text-center">Joined: {customer.joined}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              isActive={currentPage > 1}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              isActive={currentPage < totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}