import React from "react";

import { Typography } from "@/src/components/ui/typography";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { MerchantHeader } from "@/src/components/custom/header/merchantHeader";
import { Input } from "@/src/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/src/components/ui/select";
import { Switch } from "@/src/components/ui/switch";

// Figma image assets

import addIcon from "@/public/assets/icons/add.svg";
import blackSearchIcon from "@/public/assets/icons/search_black.svg";
import itemIcon from "@/public/assets/icons/item.svg";
import greenEyeIcon from "@/public/assets/icons/green_eye.svg";
import closedEyeIcon from "@/public/assets/icons/eye_closed.svg";
import editItemIcon from "@/public/assets/icons/item_edit.svg";
import deleteItemIcon from "@/public/assets/icons/item_delete.svg";

const imgFrame7 = "http://localhost:3845/assets/d54698fc9332e5ff9ca9e07428b5b67d44bc45bf.svg";
const imgFrame8 = "http://localhost:3845/assets/440de8e3762c4f47d1c043b36fb1b4a8b6a362be.svg";
const imgFrame9 = "http://localhost:3845/assets/eca6c3134f7ecf7b6029cc0eed3f3d3ebbd12985.svg";
const imgFrame10 = "http://localhost:3845/assets/7baf41d57cf0024cc4acb9a85e6dc2407f49cf3b.svg";
const imgFrame11 = "http://localhost:3845/assets/28e9e88ed26136cc76e342f60b46b456f4c15c76.svg";
const imgFrame12 = "http://localhost:3845/assets/48efa9bfc9ff5af2a8f6e8a3cb119666c892ac2b.svg";
const imgFrame13 = "http://localhost:3845/assets/11e343858c87c43adf774bd449873b46df3be747.svg";
const imgFrame14 = "http://localhost:3845/assets/cf29938f88a961c33e43a7979fa07b5699596921.svg";
const imgImg1 = "http://localhost:3845/assets/59ac253f4cf01c58a461caa65b61532eb61ac9b2.png";
const imgImg2 = "http://localhost:3845/assets/3cef05ab9d99d1c2802e522d8be68eb1ac3447b2.png";
const imgImg3 = "http://localhost:3845/assets/19a62cb56a507b6e29c571f43e45a7c2894e49b3.png";
const imgImg4 = "http://localhost:3845/assets/0759ab605d5f69d4deeec6561a9405e2d5293b53.png";
const imgImg5 = "http://localhost:3845/assets/306bbe4098ac12ac4362f3aa19d7c251f9284e3e.png";

export default function MerchantInventoryBook() {
  // Example state for toggles (in real app, use item-specific state)
  const [publicToggles, setPublicToggles] = React.useState([true, true, false, true, false]);
  const handleToggle = (idx: number) => {
    setPublicToggles(toggles => toggles.map((v, i) => (i === idx ? !v : v)));
  };

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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <MerchantHeader />

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-6">
        {/* Title and Add Equipment Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="pb-4">
              <Typography variant="h1" className="text-[30px] text-gray-800 mb-1">
                My Inventory Book
              </Typography>
            </div>
            <div>
              <Typography variant="body" className="text-gray-600">
                Manage your equipment listings and visibility
              </Typography>
            </div>
          </div>
          <Button variant="skyPrimary" className="h-12 px-8 flex items-center gap-2 hover:bg-sky-700">
            <img src={addIcon} alt="Add" className="w-4 h-4" />
            Add Equipment
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex items-center bg-white rounded-lg border border-gray-200 h-[50px] px-4">
            <img src={blackSearchIcon} alt="Search" className="w-4 h-4 mr-2" />
            <Input
              type="text"
              placeholder="Search equipment..."
              className="flex-1 bg-transparent outline-none text-base text-gray-700 placeholder-gray-400 border-none shadow-none"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[146px] flex items-center bg-white rounded-lg border border-gray-200 h-[50px] px-4 text-base text-black">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-lg shadow p-6 flex flex-row items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Items</div>
              <div className="text-2xl font-bold text-gray-800">24</div>
            </div>
            <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center">
              <img src={itemIcon} alt="Total" className="w-6 h-6" />
            </div>
          </Card>
          <Card className="rounded-lg shadow p-6 flex flex-row items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Public Listings</div>
              <div className="text-2xl font-bold text-green-600">18</div>
            </div>
            <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center">
              <img src={greenEyeIcon} alt="Public" className="w-6 h-6" />
            </div>
          </Card>
          <Card className="rounded-lg shadow p-6 flex flex-row items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Private Items</div>
              <div className="text-2xl font-bold text-gray-600">6</div>
            </div>
            <div className="bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center">
              <img src={closedEyeIcon} alt="Private" className="w-6 h-6" />
            </div>
          </Card>
        </div>

        {/* Inventory List */}
        <div className="flex flex-col gap-6">
          {/* Inventory Card 1 */}
          {[{
            img: imgImg1,
            title: "RED Komodo 6K",
            desc: "Camera • 6K Resolution, Global Shutter",
            public: publicToggles[0],
            status: "Public"
          }, {
            img: imgImg2,
            title: "ARRI SkyPanel S60-C",
            desc: "Lighting • LED Panel, Color Temperature Control",
            public: publicToggles[1],
            status: "Public"
          }, {
            img: imgImg3,
            title: "Canon EF 24-70mm f/2.8L",
            desc: "Lens • Zoom Lens, f/2.8 Aperture",
            public: publicToggles[2],
            status: "Private"
          }, {
            img: imgImg4,
            title: "DJI Ronin 4D",
            desc: "Stabilizer • 4-Axis Gimbal, LiDAR Focus",
            public: publicToggles[3],
            status: "Public"
          }, {
            img: imgImg5,
            title: "Rode NTG4+ Shotgun Mic",
            desc: "Audio • Directional Microphone, Phantom Power",
            public: publicToggles[4],
            status: "Private"
          }].map((item, idx) => (
            <Card key={item.title} className="rounded-lg shadow flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
              <div className="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 w-full items-center">
                <Typography variant="h3" className="text-[18px] text-gray-800">{item.title}</Typography>
                <div className="text-sm text-gray-600">{item.desc}</div>
                <div className="flex items-center gap-2 mt-2">
                  {item.status === "Public" ? (
                    <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                      <img src={imgFrame9} alt="Public" className="w-3 h-3" /> Public
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                      <img src={imgFrame12} alt="Private" className="w-3 h-3" /> Private
                    </span>
                  )}
                </div>
              </div>
              {/* Action bar: toggle, edit, delete */}
              <div className="flex items-center gap-4">
                {/* Toggle Switch */}
                <Switch
                  checked={item.public}
                  onCheckedChange={() => handleToggle(idx)}
                  aria-label="Toggle public/private"
                />
                {/* Edit Icon */}
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Edit">
                  <img src={editItemIcon} alt="Edit" className="w-5 h-5" />
                </button>
                {/* Delete Icon */}
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Delete">
                  <img src={deleteItemIcon} alt="Delete" className="w-5 h-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-sky-600 text-white font-semibold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
}
