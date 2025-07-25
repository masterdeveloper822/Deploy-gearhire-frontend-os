import React from "react"

import { Typography } from "@/components/ui/typography"
import { AuthHeader } from "@/components/layout/header/auth-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

// Figma image assets

import addIcon from "@/assets/images/ui/icons/add.svg"
import blackSearchIcon from "@/assets/images/ui/icons/search_black.svg"
import itemIcon from "@/assets/images/ui/icons/item.svg"
import greenEyeIcon from "@/assets/images/ui/icons/eye-green.svg"
import closedEyeIcon from "@/assets/images/ui/icons/eye_closed.svg"
import editItemIcon from "@/assets/images/ui/icons/item_edit.svg"
import deleteItemIcon from "@/assets/images/ui/icons/item_delete.svg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

import gear1 from "@/assets/images/gear/gear1.png"
import gear2 from "@/assets/images/gear/gear2.png"
import gear3 from "@/assets/images/gear/gear3.png"
import gear4 from "@/assets/images/gear/gear4.png"
import gear5 from "@/assets/images/gear/gear5.png"

const MerchantInventoryBook: React.FC = () => {
  // Example state for toggles (in real app, use item-specific state)
  const [publicToggles, setPublicToggles] = React.useState([
    true,
    true,
    false,
    true,
    false,
  ])
  const handleToggle = (idx: number) => {
    setPublicToggles((toggles) => toggles.map((v, i) => (i === idx ? !v : v)))
  }

  const groups = [
    {
      label: "Video",
      options: [
        { value: "lighting", label: "Lighting" },
        { value: "media-servers", label: "Media Servers" },
      ],
    },
    {
      label: "Scenic",
      options: [
        { value: "pipe-drape", label: "Pipe & Drape" },
        { value: "podiums", label: "Podiums" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-[1280px] px-4 py-6">
        {/* Title and Add Equipment Button */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="pb-4">
              <Typography
                variant="h1"
                className="mb-1 text-[30px] text-gray-800"
              >
                My Inventory Book
              </Typography>
            </div>
            <div>
              <Typography variant="body" className="text-gray-600">
                Manage your equipment listings and visibility
              </Typography>
            </div>
          </div>
          <Link to="/merchant-add-equipment">
            <Button
              variant="tertiary"
              className="flex h-12 items-center gap-2 px-8 text-base hover:bg-sky-700"
            >
              <img src={addIcon} alt="Add" className="h-4 w-4" />
              Add Equipment
            </Button>
          </Link>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex h-[50px] flex-1 items-center rounded-lg border border-gray-200 bg-white px-4">
            <img src={blackSearchIcon} alt="Search" className="mr-2 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search equipment..."
              className="flex-1 border-none bg-transparent text-base text-gray-700 placeholder-gray-400 shadow-none outline-none"
            />
          </div>
          <Select>
            <SelectTrigger className="flex h-[50px] w-full items-center rounded-lg border border-gray-200 bg-white px-4 text-base text-black md:w-[146px]">
              <SelectValue placeholder="All Items" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="rented">Rented</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-row items-center justify-between rounded-lg p-6 shadow">
            <div>
              <div className="text-sm text-gray-600">Total Items</div>
              <div className="text-2xl font-bold text-gray-800">24</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <img src={itemIcon} alt="Total" className="h-6 w-6" />
            </div>
          </Card>
          <Card className="flex flex-row items-center justify-between rounded-lg p-6 shadow">
            <div>
              <div className="text-sm text-gray-600">Public Listings</div>
              <div className="text-2xl font-bold text-green-600">18</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <img src={greenEyeIcon} alt="Public" className="h-6 w-6" />
            </div>
          </Card>
          <Card className="flex flex-row items-center justify-between rounded-lg p-6 shadow">
            <div>
              <div className="text-sm text-gray-600">Private Items</div>
              <div className="text-2xl font-bold text-gray-600">6</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <img src={closedEyeIcon} alt="Private" className="h-6 w-6" />
            </div>
          </Card>
        </div>

        {/* Inventory List */}
        <div className="flex flex-col gap-6">
          {/* Inventory Card 1 */}
          {[
            {
              img: gear1,
              title: "RED Komodo 6K",
              desc: "Camera • 6K Resolution, Global Shutter",
              public: publicToggles[0],
              status: "Public",
            },
            {
              img: gear2,
              title: "ARRI SkyPanel S60-C",
              desc: "Lighting • LED Panel, Color Temperature Control",
              public: publicToggles[1],
              status: "Public",
            },
            {
              img: gear3,
              title: "Canon EF 24-70mm f/2.8L",
              desc: "Lens • Zoom Lens, f/2.8 Aperture",
              public: publicToggles[2],
              status: "Private",
            },
            {
              img: gear4,
              title: "DJI Ronin 4D",
              desc: "Stabilizer • 4-Axis Gimbal, LiDAR Focus",
              public: publicToggles[3],
              status: "Public",
            },
            {
              img: gear5,
              title: "Rode NTG4+ Shotgun Mic",
              desc: "Audio • Directional Microphone, Phantom Power",
              public: publicToggles[4],
              status: "Private",
            },
          ].map((item, idx) => (
            <Card
              key={item.title}
              className="flex flex-col items-start gap-6 rounded-lg p-6 shadow md:flex-row md:items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full flex-1 items-center">
                <Typography variant="h3" className="text-[18px] text-gray-800">
                  {item.title}
                </Typography>
                <div className="text-sm text-gray-600">{item.desc}</div>
                <div className="mt-2 flex items-center gap-2">
                  {item.status === "Public" ? (
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      <FontAwesomeIcon icon={faEye} alt="Public" className="text-green-800 h-3 w-3" />{" "}
                      Public
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      <FontAwesomeIcon icon={faEye} alt="Private" className="text-gray-600 h-3 w-3" />{" "}
                      Private
                    </span>
                  )}
                </div>
              </div>
              {/* Action bar: toggle, edit, delete */}
              <div className="flex items-center gap-4">
                {/* Toggle Switch */}
                <Switch
                  className="data-[state=checked]:bg-tertiary"
                  checked={item.public}
                  onCheckedChange={() => handleToggle(idx)}
                  aria-label="Toggle public/private"
                />
                {/* Edit Icon */}
                <button
                  className="rounded p-1 hover:bg-gray-100"
                  aria-label="Edit"
                >
                  <img src={editItemIcon} alt="Edit" className="h-5 w-5" />
                </button>
                {/* Delete Icon */}
                <button
                  className="rounded p-1 hover:bg-gray-100"
                  aria-label="Delete"
                >
                  <img src={deleteItemIcon} alt="Delete" className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-sky-600 font-semibold text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-700 hover:bg-gray-100">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </main>
    </div>
  )
}

export { MerchantInventoryBook }
