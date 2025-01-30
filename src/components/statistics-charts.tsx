"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, ShoppingCart, DollarSign, Users, Package, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

const monthlyRevenue = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 8000 },
]

const salesData = [
  { category: "Electronics", thisMonth: 4000, lastMonth: 2400 },
  { category: "Fashion", thisMonth: 3000, lastMonth: 1398 },
  { category: "Home & Living", thisMonth: 2000, lastMonth: 9800 },
  { category: "Beauty", thisMonth: 2780, lastMonth: 3908 },
]

const topProducts = [
  { id: 1, name: "Wireless Headphones", sales: 2400 },
  { id: 2, name: "Smart Watch", sales: 1567 },
  { id: 3, name: "LED Desk Lamp", sales: 980 },
  { id: 4, name: "Bluetooth Speaker", sales: 3908 },
]

const customerDemographics = [
  { location: "North America", customers: 4000 },
  { location: "Europe", customers: 3000 },
  { location: "Asia", customers: 2000 },
  { location: "Others", customers: 2780 },
]

export default function StatisticsCharts() {
  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Your business at a glance</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="hidden sm:flex">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">$45,230</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              20.1% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">2,345</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              15.3% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Order Value</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">$235.12</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-purple-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              8.7% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Customers</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">1,234</p>
              </div>
              <div className="p-3 bg-pink-100 rounded-full">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-pink-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              12.5% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Revenue Overview</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Monthly revenue trend for the current year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyRevenue}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="table">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Month</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyRevenue.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{item.month}</td>
                          <td className="text-right py-3 px-4 text-gray-800 dark:text-gray-200">
                            ${item.revenue.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Sales by Category</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Comparison of sales across different product categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <XAxis dataKey="category" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="thisMonth" fill="#8884d8" name="This Month" />
                    <Bar dataKey="lastMonth" fill="#82ca9d" name="Last Month" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="table">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Category</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                          This Month
                        </th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                          Last Month
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{item.category}</td>
                          <td className="text-right py-3 px-4 text-gray-800 dark:text-gray-200">
                            ${item.thisMonth.toLocaleString()}
                          </td>
                          <td className="text-right py-3 px-4 text-gray-800 dark:text-gray-200">
                            ${item.lastMonth.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Top Products</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Best-selling products by sales volume
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={topProducts}
                      dataKey="sales"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="table">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Product</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((product, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{product.name}</td>
                          <td className="text-right py-3 px-4 text-gray-800 dark:text-gray-200">
                            {product.sales.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">Customer Demographics</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Distribution of customers across regions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="table">Table</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={customerDemographics}>
                    <XAxis dataKey="location" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Bar dataKey="customers" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="table">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Location</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                          Customers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerDemographics.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{item.location}</td>
                          <td className="text-right py-3 px-4 text-gray-800 dark:text-gray-200">
                            {item.customers.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

