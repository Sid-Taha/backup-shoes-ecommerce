// src/components/FilterHeader.tsx
"use client"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { client } from "@/sanity/lib/client"
import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useState } from "react"

export default function Header({ setSelectedCategory }:{ setSelectedCategory: (name: string | null) => void }) 

{
  const [uCategory, setUcategory] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      const res: string[] = await client.fetch(`*[_type == 'product'].category`);
      const uniqueCategories: string[] = [...new Set(res)];
      setUcategory(uniqueCategories);
    }

    getData();
  }, []);

  function valueChange(value: string) {
    setSelectedValue(value);
    setSelectedCategory(value); 
  }

  function hideFilter() {
    setSelectedValue(null); 
    setSelectedCategory(null); 
  }

  return (
    <header className="w-full bg-white py-4 px-12">
      <div className="flex items-center justify-between max-w-[1344px] mx-auto">
        <h1 className="text-2xl font-medium text-[#111111] font-helvetica">New ({uCategory.length})</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="font-abeezee text-base font-normal text-[#111111] hover:bg-gray-100"
            onClick={hideFilter}
          >
            <span>Hide Filters</span>
            <SlidersHorizontal className="ml-2 h-5 w-5" />
          </Button>
          <Select value={selectedValue || ""} onValueChange={valueChange}> {/* Controlled Select */}
            <SelectTrigger className="w-[120px] border-none font-abeezee text-[15px] font-normal hover:bg-gray-100">
              <SelectValue placeholder="Sort By" /> {/* Placeholder */}
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {uCategory.map((name: string, index: number) => (
                  <SelectItem value={name} key={index}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}