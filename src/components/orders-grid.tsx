// src/components/orders-grid.tsx
"use client"
import { Search, CheckCircle2, Clock, Truck, XCircle, ArrowRight, User, CalendarDays, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: number;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2024-03-15",
    status: "fulfilled",
    total: 149.99,
    items: 3
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2024-03-14",
    status: "pending",
    total: 89.99,
    items: 2
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    date: "2024-03-13",
    status: "cancelled",
    total: 199.99,
    items: 5
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    date: "2024-03-12",
    status: "processing",
    total: 299.99,
    items: 4
  },
];

const statusIcons: Record<OrderStatus, typeof CheckCircle2> = {
  fulfilled: CheckCircle2,
  pending: Clock,
  processing: Truck,
  cancelled: XCircle
};

type OrderStatus = 'fulfilled' | 'pending' | 'processing' | 'cancelled';

const statusColors: Record<OrderStatus, string> = {
  fulfilled: "bg-green-50 border-green-200",
  pending: "bg-yellow-50 border-yellow-200",
  processing: "bg-blue-50 border-blue-200",
  cancelled: "bg-red-50 border-red-200"
};

export default function OrdersGrid() {
  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Orders ({mockOrders.length})
        </h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search orders..." className="pl-10 w-full" />
        </div>
        
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="fulfilled">Fulfilled</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockOrders.map((order) => {
          const StatusIcon = statusIcons[order.status];
          return (
            <Card 
              key={order.id} 
              className={cn(
                "hover:shadow-lg transition-all duration-300 border-l-4",
                statusColors[order.status],
                {
                  'border-l-green-400': order.status === 'fulfilled',
                  'border-l-yellow-400': order.status === 'pending',
                  'border-l-blue-400': order.status === 'processing',
                  'border-l-red-400': order.status === 'cancelled',
                }
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <StatusIcon className="w-5 h-5" />
                    <span>Order #{order.id}</span>
                  </CardTitle>
                  <Badge 
                    variant="outline"
                    className={cn({
                      'text-green-700': order.status === 'fulfilled',
                      'text-yellow-700': order.status === 'pending',
                      'text-blue-700': order.status === 'processing',
                      'text-red-700': order.status === 'cancelled',
                    })}
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{order.customer}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 text-muted-foreground" />
                  <span>{new Date(order.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <span>{order.items} item{order.items > 1 ? 's' : ''}</span>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4">
                <div className="flex w-full items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Amount</p>
                    <p className="text-xl font-bold text-primary">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}