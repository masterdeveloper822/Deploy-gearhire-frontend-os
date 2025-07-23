import { CommonFooter } from "@/components/layout/footer/common"
import { RenterHeader } from "@/components/layout/header/renter-header"
import { BackArrowIcon } from "@/components/ui/icon"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { faCloudArrowUp, faFileImage, faFileLines, faFilePdf, faFloppyDisk, faGear, faInfoCircle, faLocationDot, faPaperclip, faTrash, faVideo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Typography } from "@/components/ui/typography"

// Image and SVG asset URLs from Figma export
const imgImg =
  "http://localhost:3845/assets/f578f9c2a181ef669150341163e63e6e9da01878.png"
const imgFrame =
  "http://localhost:3845/assets/ed4e1169b638e2e838350960320b53c878e45615.svg"
const imgFrame1 =
  "http://localhost:3845/assets/9861a0b6e8bb9b630982f192343e0944f05f6199.svg"
const imgFrame2 =
  "http://localhost:3845/assets/1efdeed862e90b5b080da5ccaa63bb5c3a6cf0bc.svg"
const imgFrame3 =
  "http://localhost:3845/assets/97be41678977bd78c837da782e70fb9a468cf77a.svg"
const imgFrame4 =
  "http://localhost:3845/assets/77a813c36a890de9f20510714d9fa43383f196a2.svg"
const imgFrame5 =
  "http://localhost:3845/assets/268af550e6b73fb848646cc032f043d7b305fd5a.svg"
const imgFrame6 =
  "http://localhost:3845/assets/f1ea8fc8b4f702114fa9eca74d6a4134c117f1c0.svg"
const imgFrame7 =
  "http://localhost:3845/assets/14bb3f29ea205e726313fb14b430d85d23064db9.svg"
const imgFrame8 =
  "http://localhost:3845/assets/bab2b2b45b0479a7fb33c7d9aee5f00ba59ec1e5.svg"
const imgFrame9 =
  "http://localhost:3845/assets/891dec6e8268492399d657c9dfe1e20caf9c3507.svg"
const imgFrame10 =
  "http://localhost:3845/assets/56622b71fb3795a6424c358eb5ac463fcefbe217.svg"
const imgFrame11 =
  "http://localhost:3845/assets/9421ac7b9341d210b910662c4fe7d9f28bf56477.svg"
const imgFrame12 =
  "http://localhost:3845/assets/0c635fa71a5b7ef77bef381a1d4f6c035d587f66.svg"
const imgFrame13 =
  "http://localhost:3845/assets/eb6cba590cab38215da137ee00caa9eae1e3e6b4.svg"
const imgFrame14 =
  "http://localhost:3845/assets/04d098c094ebbc24fc3adc3f388e17e24437be7d.svg"
const imgFrame15 =
  "http://localhost:3845/assets/237036d88812ae3ad3eb50443b640b748eb276e0.svg"
const imgFrame16 =
  "http://localhost:3845/assets/3fb4b81e046289a29f1daa8f4528d66d37ad2c91.svg"
const imgFrame17 =
  "http://localhost:3845/assets/60e2e0178ba9af28a95777979db6cbddaebda36c.svg"

const EditRfq = () => {
  const [status, setStatus] = React.useState("Open")
  const navigate = useNavigate()
  const [expiryDate, setExpiryDate] = React.useState<Date | undefined>(
    new Date("2025-01-05"),
  )
  const [expiryPopoverOpen, setExpiryPopoverOpen] = React.useState(false)
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    new Date("2024-12-15"),
  )
  const [endDate, setEndDate] = React.useState<Date | undefined>(
    new Date("2024-12-20"),
  )
  const [startPopoverOpen, setStartPopoverOpen] = React.useState(false)
  const [endPopoverOpen, setEndPopoverOpen] = React.useState(false)
  const [visibility, setVisibility] = React.useState("public")
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([])
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  return (
    <div className="relative min-h-screen bg-gray-50">
      <RenterHeader />
      {/* Main Content */}
      <main className="mx-auto w-full max-w-[896px] px-2 py-4 sm:px-4 sm:py-8">
        {/* Title and Note */}
        <div className="mb-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              className="mb-2 mr-0 flex h-6 w-6 items-center justify-center sm:mb-0 sm:mr-4"
              onClick={() => navigate(-1)}
              aria-label="Back"
            >
              <BackArrowIcon />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Edit RFQ</h1>
              <p className="my-4 text-base text-gray-600">
                Update your equipment request details
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 sm:flex-row sm:items-center">
            <FontAwesomeIcon icon={faInfoCircle} alt="info" className="text-blue-700 h-4 w-4" />
            <span className="text-sm text-blue-800">
              <b>Note:</b> Changes to your RFQ will be visible to merchants
              immediately after saving. Only RFQs with "Open" status can be
              edited.
            </span>
          </div>
        </div>
        {/* Form Sections */}
        <form className="space-y-8">
          {/* Project Information */}
          <section className="rounded-lg bg-white p-4 shadow sm:p-6">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faFileLines} alt="project" className="text-tertiary mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                Project Information
              </h2>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                RFQ Title (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                defaultValue="Camera Package for Short Film"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                rows={4}
                defaultValue={
                  "Looking for a complete camera package for a 5-day short film shoot. Need a professional cinema\ncamera with various lens options, stabilization equipment, and basic lighting setup. The project is a\ndrama with both indoor and outdoor scenes."
                }
              />
            </div>
          </section>
          {/* Location & Dates */}
          <section className="rounded-lg bg-white p-4 shadow sm:p-6">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} alt="location" className="text-tertiary mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                Location & Dates
              </h2>
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                defaultValue="London, UK"
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Rental Start Date
                </label>
                <Popover
                  open={startPopoverOpen}
                  onOpenChange={setStartPopoverOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-12 w-full items-center justify-start rounded-md border py-2 pl-6 pr-3 text-left text-base font-normal ring-offset-background placeholder:text-muted-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-sky-500"
                    >
                      <span className="flex-1">
                        {startDate ? (
                          format(startDate, "MMM dd, yyyy")
                        ) : (
                          <span>mm/dd/yyyy</span>
                        )}
                      </span>
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[270px] p-0" align="end">
                    <Calendar
                      className="w-full"
                      captionLayout="dropdown"
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => {
                        setStartDate(date)
                        setStartPopoverOpen(false)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Rental End Date
                </label>
                <Popover open={endPopoverOpen} onOpenChange={setEndPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-12 w-full items-center justify-start rounded-md border py-2 pl-6 pr-3 text-left text-base font-normal ring-offset-background placeholder:text-muted-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-sky-500"
                    >
                      <span className="flex-1">
                        {endDate ? (
                          format(endDate, "MMM dd, yyyy")
                        ) : (
                          <span>mm/dd/yyyy</span>
                        )}
                      </span>
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[270px] p-0" align="end">
                    <Calendar
                      className="w-full"
                      captionLayout="dropdown"
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => {
                        setEndDate(date)
                        setEndPopoverOpen(false)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </section>
          {/* Equipment Needs */}
          <section className="rounded-lg bg-white p-4 shadow sm:p-6">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faVideo} alt="equipment" className="text-tertiary mr-2 h-5 w-5" />
              <h2 className="text-lg font-semibold text-gray-800">
                Equipment Needs
              </h2>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Camera
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Lighting
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  defaultChecked
                />{" "}
                Audio
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Grip
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Power
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-gray-400 p-3 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />{" "}
                Accessories
              </label>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Optional Notes per Category
              </label>
              <textarea
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900"
                rows={3}
                defaultValue={
                  "Camera: Need 4K capability with cinema lens mount. Lighting: Basic 3-point lighting setup preferred.\nAudio: Wireless mic system for dialogue recording."
                }
              />
            </div>
          </section>
          {/* Attachments */}
          <section className="rounded-lg bg-white p-4 shadow sm:p-6">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faPaperclip}
                alt="attachments"
                className="text-tertiary mr-2 h-4 w-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Attachments
              </h2>
            </div>
            <div className="mb-4 space-y-2">
              <div className="flex items-center rounded-lg bg-gray-50 p-3">
                <FontAwesomeIcon icon={faFilePdf} alt="pdf" className="text-red-500 mr-2 h-4 w-4" />
                <span className="flex-1 text-sm text-gray-700">
                  project-details.pdf <span className="ml-2 text-xs text-gray-500">(2.1 MB)</span>
                </span>
                <button>
                  <FontAwesomeIcon icon={faTrash} alt="remove" className="text-red-500 h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center rounded-lg bg-gray-50 p-3">
                <FontAwesomeIcon icon={faFileImage} alt="jpg" className="text-blue-500 mr-2 h-4 w-3" />
                <span className="flex-1 text-sm text-gray-700">
                  location-reference.jpg
                <span className="ml-2 text-xs text-gray-500">(1.8 MB)</span>
                </span>
                <button>
                  <FontAwesomeIcon icon={faTrash} alt="remove" className="text-red-500 h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-8">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                className="mb-2 h-8 w-8 text-gray-400"
              />
              <span className="text-sm text-gray-600">
                Drag and drop files here, or click to browse
              </span>
              <span className="text-xs text-gray-500">
                PDF, JPG, DOC files up to 5MB each (3 files max)
              </span>
              <Button
                variant="ghost"
                className="mt-4 rounded-lg bg-gray-100 px-4 py-2 text-base text-gray-700"
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose Files
              </Button>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    const files = Array.from(e.target.files)
                    setSelectedFiles(files)
                    console.log("Selected files:", files)
                  }
                }}
              />
              {selectedFiles.length > 0 && (
                <ul className="mt-2 text-sm text-gray-700">
                  {selectedFiles.map((file, idx) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          {/* RFQ Settings */}
          <section className="rounded-lg bg-white p-4 shadow sm:p-6">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faGear} alt="settings" className="text-tertiary mr-2 h-4 w-4" />
              <h2 className="text-lg font-semibold text-gray-800">
                RFQ Settings
              </h2>
            </div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <Popover
                  open={expiryPopoverOpen}
                  onOpenChange={setExpiryPopoverOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-12 w-full items-center justify-start rounded-md border py-2 pl-6 pr-3 text-left text-base font-normal ring-offset-background placeholder:text-muted-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-sky-500"
                    >
                      <span className="flex-1">
                        {expiryDate ? (
                          format(expiryDate, "MMM dd, yyyy")
                        ) : (
                          <span>mm/dd/yyyy</span>
                        )}
                      </span>
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-80" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[270px] p-0" align="end">
                    <Calendar
                      className="w-full"
                      captionLayout="dropdown"
                      mode="single"
                      selected={expiryDate}
                      onSelect={(date) => {
                        setExpiryDate(date)
                        setExpiryPopoverOpen(false)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <span className="text-xs text-gray-500">
                  Merchants can submit quotes until this date
                </span>
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="h-11 w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-xs text-gray-500">
                  Only open RFQs accept new quotes
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                RFQ Visibility
              </label>
              <div className="space-y-3">
                <label
                  className={`flex cursor-pointer flex-col rounded-lg border p-4 ${
                    visibility === "public"
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="rfq-visibility"
                      value="public"
                      checked={visibility === "public"}
                      onChange={() => setVisibility("public")}
                      className="form-radio h-4 w-4 text-sky-600"
                    />
                    <span
                      className={`${visibility === "public" ? "text-blue-800" : "text-gray-800"} text-sm`}
                    >
                      Public
                    </span>
                  </span>
                  <span className="ml-6 text-sm text-gray-600">
                    All verified merchants can see and respond to this RFQ
                  </span>
                </label>
                <label
                  className={`flex cursor-pointer flex-col rounded-lg border p-4 ${
                    visibility === "private"
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="rfq-visibility"
                      value="private"
                      checked={visibility === "private"}
                      onChange={() => setVisibility("private")}
                      className="form-radio h-4 w-4 text-sky-600"
                    />
                    <span
                      className={`${visibility === "private" ? "text-blue-800" : "text-gray-800"} text-sm`}
                    >
                      Private
                    </span>
                  </span>
                  <span className="ml-6 text-sm text-gray-600">
                    Only selected merchants can see and respond to this RFQ
                  </span>
                </label>
              </div>
            </div>
          </section>
          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="tertiary"
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-base font-medium"
            >
              <FontAwesomeIcon icon={faFloppyDisk} alt="save" className="h-4 w-4" /> Save
              Changes
            </Button>
            <Button
              variant="ghost"
              type="button"
              className="flex-1 rounded-lg border border-gray-300 py-3 text-base font-medium text-gray-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </main>
      <CommonFooter />
    </div>
  )
}

export default EditRfq
