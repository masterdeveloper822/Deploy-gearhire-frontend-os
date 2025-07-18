import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

import SearchBlackIcon from "@/assets/images/ui/icons/search_black.svg"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"

interface RFQSidebarProps {
  search: string
  setSearch: (v: string) => void
  category: string
  setCategory: (v: string) => void
  location: string
  setLocation: (v: string) => void
  status: string
  setStatus: (v: string) => void
  dateRange: { from: string; to: string }
  setDateRange: (v: { from: string; to: string }) => void
  clearAll: () => void
}

export const RFQSidebar: React.FC<RFQSidebarProps> = ({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  status,
  setStatus,
  dateRange,
  setDateRange,
  clearAll,
}) => {
  const handleFromDateSelect = (date: Date | undefined) => {
    if (date) {
      setDateRange({
        ...dateRange,
        from: date.toISOString(),
      })
    }
  }

  const [fromPopoverOpen, setFromPopoverOpen] = useState(false)
  const [toPopoverOpen, setToPopoverOpen] = useState(false)

  const handleToDateSelect = (date: Date | undefined) => {
    if (date) {
      setDateRange({
        ...dateRange,
        to: date.toISOString(),
      })
    }
  }

  return (
    <Card className="h-fit w-full p-6 shadow">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">Filters</span>
        <button className="text-sm font-medium text-sky-600" onClick={clearAll}>
          Clear All
        </button>
      </div>
      {/* Search */}
      <div className="mb-6">
        <Label
          htmlFor="search-rfq"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Search RFQs
        </Label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
            <img src={SearchBlackIcon} alt="Search" className="h-4 w-4" />
          </span>
          <Input
            id="search-rfq"
            type="text"
            className="h-12 w-full pl-12"
            placeholder="Search by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* Category */}
      <div className="mb-6">
        <Label
          htmlFor="category-select"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Equipment Category
        </Label>
        <Select
          value={category}
          onValueChange={(v) => setCategory(v === "all" ? "" : v)}
        >
          <SelectTrigger id="category-select" className="h-12 w-full">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Camera">Camera</SelectItem>
            <SelectItem value="Lens">Lens</SelectItem>
            <SelectItem value="Lighting">Lighting</SelectItem>
            <SelectItem value="Audio">Audio</SelectItem>
            <SelectItem value="Accessories">Accessories</SelectItem>
            <SelectItem value="Grip">Grip</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Location */}
      <div className="mb-6">
        <Label
          htmlFor="location-input"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Location
        </Label>
        <Input
          id="location-input"
          type="text"
          className="h-12 w-full"
          placeholder="City, Region..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {/* Status */}
      <div className="mb-6">
        <Label
          htmlFor="status-select"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Status
        </Label>
        <Select
          value={status}
          onValueChange={(v) => setStatus(v === "all" ? "" : v)}
        >
          <SelectTrigger id="status-select" className="h-12 w-full">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
            <SelectItem value="Accepted">Accepted</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Date Range */}
      <div>
        <Label className="mb-1 block text-sm font-medium text-gray-700">
          Date Range
        </Label>
        <div className="mb-2">
          <Popover open={fromPopoverOpen} onOpenChange={setFromPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-12 w-full items-center justify-start rounded-md border py-2 pl-6 pr-3 text-left text-base font-normal ring-offset-background placeholder:text-muted-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-sky-500"
              >
                <span className="flex-1">
                  {dateRange.from ? (
                    format(new Date(dateRange.from), "MMM dd, yyyy")
                  ) : (
                    <span>mm/dd/yyyy</span>
                  )}
                </span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-[270px] p-0" align="start">
              <Calendar
                className="w-full"
                captionLayout="dropdown"
                mode="single"
                selected={dateRange.from ? new Date(dateRange.from) : undefined}
                onSelect={(date) => {
                  handleFromDateSelect(date)
                  setFromPopoverOpen(false) // close after select
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover open={toPopoverOpen} onOpenChange={setToPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-12 w-full items-center justify-start rounded-md border py-2 pl-6 pr-3 text-left text-base font-normal ring-offset-background placeholder:text-muted-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-sky-500"
              >
                <span className="flex-1">
                  {dateRange.to ? (
                    format(new Date(dateRange.to), "MMM dd, yyyy")
                  ) : (
                    <span>mm/dd/yyyy</span>
                  )}
                </span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[270px] p-0" align="start">
              <Calendar
                className="w-full"
                captionLayout="dropdown"
                mode="single"
                selected={dateRange.to ? new Date(dateRange.to) : undefined}
                onSelect={(date) => {
                  handleToDateSelect(date)
                  setToPopoverOpen(false) // close after select
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  )
}
