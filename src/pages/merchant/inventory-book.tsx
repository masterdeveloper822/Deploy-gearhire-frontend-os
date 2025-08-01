import React, { useEffect, useState } from "react"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { API_ENDPOINTS } from "@/lib/api"

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
<<<<<<< HEAD
import { faAngleLeft, faAngleRight, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { BackArrowIcon } from "@/components/ui/icon"
=======
import { faAngleLeft, faAngleRight, faEye } from "@fortawesome/free-solid-svg-icons"

import gear1 from "@/assets/images/gear/gear1.png"
import gear2 from "@/assets/images/gear/gear2.png"
import gear3 from "@/assets/images/gear/gear3.png"
import gear4 from "@/assets/images/gear/gear4.png"
import gear5 from "@/assets/images/gear/gear5.png"
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08

const MerchantInventoryBook: React.FC = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [gearItems, setGearItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)
  const itemsPerPage = 6

  useEffect(() => {
    const fetchGearItems = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken")
        const response = await fetch(API_ENDPOINTS.GEAR_ITEMS, {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        })
        if (response.ok) {
          const data = await response.json()
          setGearItems(data.results || [])
        } else {
          console.error("Error fetching gear items: ", response.statusText)
        }
      } catch (error) {
        console.error("Error fetching gear items: ", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchGearItems()
  }, [])

  const handleToggle = async (itemId: number) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(API_ENDPOINTS.GEAR_ITEM_TOGGLE(itemId), {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok) {
        setGearItems(prevItems => 
          prevItems.map(item => 
            item.id === itemId 
              ? { ...item, is_public: !item.is_public }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Failed to toggle visibility:", error);
    }
  };

  // Filter items based on search term
  const filteredItems = gearItems.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.equipment_name.toLowerCase().includes(searchLower) ||
      item.equipment_category.category_name.toLowerCase().includes(searchLower) ||
      (item.key_specifications && item.key_specifications.toLowerCase().includes(searchLower))
    );
  });

  // Calculate pagination for filtered items
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredItems.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleDeleteClick = (itemId: number) => {
    setItemToDelete(itemId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete) return;

    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(API_ENDPOINTS.GEAR_ITEM_DELETE(itemToDelete), {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });
      
      if (response.ok) {
        // Remove item from local state
        setGearItems(prevItems => prevItems.filter(item => item.id !== itemToDelete));
        toast({
          title: "Success!",
          description: "Equipment deleted successfully!",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete equipment");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete equipment.",
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <main className="mx-auto max-w-[1280px] px-4 py-6">
        {/* Title and Add Equipment Button */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="pb-4 relative">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded p-2 hover:bg-gray-100"
                onClick={() => navigate(-1)}
                aria-label="Back"
              >
                <BackArrowIcon />
              </button>
              <Typography
                variant="h1"
                className="mb-1 text-[30px] text-gray-800 pl-12"
              >
                My Inventory Book
              </Typography>
            </div>
            <div className="pl-12">
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
              value={searchTerm}
              onChange={handleSearchChange}
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
              <div className="text-2xl font-bold text-gray-800">{gearItems.length}</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <img src={itemIcon} alt="Total" className="h-6 w-6" />
            </div>
          </Card>
          <Card className="flex flex-row items-center justify-between rounded-lg p-6 shadow">
            <div>
              <div className="text-sm text-gray-600">Public Listings</div>
              <div className="text-2xl font-bold text-green-600">{gearItems.filter((item) => item.is_public).length}</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <img src={greenEyeIcon} alt="Public" className="h-6 w-6" />
            </div>
          </Card>
          <Card className="flex flex-row items-center justify-between rounded-lg p-6 shadow">
            <div>
              <div className="text-sm text-gray-600">Private Items</div>
              <div className="text-2xl font-bold text-gray-600">{gearItems.filter((item) => !item.is_public).length}</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <img src={closedEyeIcon} alt="Private" className="h-6 w-6" />
            </div>
          </Card>
        </div>

        {/* Inventory List */}
        <div className="flex flex-col gap-6">
          {/* Inventory Card 1 */}
<<<<<<< HEAD
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            currentItems.map((item) => (
=======
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
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
            <Card
              key={item.id}
              className="flex flex-col items-start gap-6 rounded-lg p-6 shadow md:flex-row md:items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.gear_item_pictures[0].image}
                  alt={item.equipment_name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full flex-1 items-center">
                <Typography variant="h3" className="text-[18px] text-gray-800">
                    {item.equipment_name}
                </Typography>
                <div className="text-sm text-gray-600">{item.equipment_category.category_name} • {item.key_specifications}</div>
                <div className="mt-2 flex items-center gap-2">
                  {item.is_public ? (
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      <FontAwesomeIcon icon={faEye} alt="Public" className="text-green-800 h-3 w-3" />{" "}
                      Public
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
<<<<<<< HEAD
                      <FontAwesomeIcon icon={faEyeSlash} alt="Private" className="text-gray-600 h-3 w-3" />{" "}
=======
                      <FontAwesomeIcon icon={faEye} alt="Private" className="text-gray-600 h-3 w-3" />{" "}
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
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
                  checked={item.is_public}
                  onCheckedChange={() => handleToggle(item.id)}
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
                  onClick={() => handleDeleteClick(item.id)}
                >
                  <img src={deleteItemIcon} alt="Delete" className="h-5 w-5" />
                </button>
              </div>
            </Card>
          )))}
        </div>

        {/* Pagination */}
<<<<<<< HEAD
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button 
              className="flex h-8 w-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`flex h-8 w-8 items-center justify-center rounded font-semibold ${
                  page === currentPage
                    ? "bg-sky-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className="flex h-8 w-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Equipment</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this equipment? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost" className="border border-gray-200 px-2 py-1" onClick={handleDeleteCancel}>
                Cancel
              </Button>
              <Button variant="destructive" className="px-2 py-1" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
=======
        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
            <FontAwesomeIcon icon={faAngleLeft} />
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
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
>>>>>>> 9cffc688373a8ac2a944d440877a008dd0dd5c08
      </main>
    </div>
  )
}

export { MerchantInventoryBook }
