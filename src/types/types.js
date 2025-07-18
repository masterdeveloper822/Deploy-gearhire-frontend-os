// RFQ type definition (JSDoc)
/**
 * @typedef {Object} RFQ
 * @property {number} id
 * @property {string} title
 * @property {string} status
 * @property {string[]} tags
 * @property {string} description
 * @property {string} location
 * @property {string} dateRange
 * @property {string} expires
 * @property {string} postedBy
 * @property {string} postedAgo
 */

/**
 * @type {RFQ[]}
 */
export const mockRFQs = [
  {
    id: 1,
    title: "Cinema Camera Package for Feature Film",
    status: "Open",
    saved: "no",
    tags: ["Camera", "Lens", "Stabilizer"],
    description:
      "Looking for a complete cinema camera package including RED or ARRI camera body, prime lens set, and professional stabilization system for independent feature production...",
    location: "Los Angeles, CA",
    dateRange: "Jan 15 - Jan 28, 2025",
    expires: "Expires Jan 10",
    postedBy: "Sarah Chen",
    postedAgo: "2 days ago",
  },
  {
    id: 2,
    title: "Professional Lighting Kit for Commercial Shoot",
    status: "Open",
    saved: "yes",
    tags: ["Lighting", "Power"],
    description:
      "Need complete lighting package including key lights, fill lights, and background lighting for 3-day commercial shoot. Must include stands and power distribution...",
    location: "New York, NY",
    dateRange: "Jan 20 - Jan 22, 2025",
    expires: "Expires Jan 12",
    postedBy: "Marcus Johnson",
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    title: "Audio Recording Equipment for Documentary",
    status: "Closed",
    saved: "no",
    tags: ["Audio", "Accessories"],
    description:
      "Professional audio recording setup needed for documentary interviews including wireless mics, boom poles, and field recorder...",
    location: "Austin, TX",
    dateRange: "Jan 8 - Jan 15, 2025",
    expires: "Expired Jan 5",
    postedBy: "Emma Davis",
    postedAgo: "5 days ago",
  },
  {
    id: 4,
    title: "Drone and Aerial Equipment Package",
    status: "Accepted",
    saved: "no",
    tags: ["Camera", "Accessories"],
    description:
      "Professional drone package needed for real estate promotional video including 4K capable drone, extra batteries, and ND filter set...",
    location: "Miami, FL",
    dateRange: "Jan 18 - Jan 25, 2025",
    expires: "Quote Accepted",
    postedBy: "David Rodriguez",
    postedAgo: "3 days ago",
  },
]

export const mockSubmittedQuotes = [
  {
    title: "Cinema Camera Package for Feature Film",
    location: "Los Angeles, CA",
    dateRange: "Jan 15 - Jan 28, 2025",
    status: "Open",
    categories: ["Camera", "Lens", "Stabilizer"],
    submitted: "Jan 9, 2025 at 2:30 PM",
  },
  {
    title: "Professional Audio Recording Setup",
    location: "New York, NY",
    dateRange: "Jan 20 - Jan 25, 2025",
    status: "Closed",
    categories: ["Audio", "Microphones"],
    submitted: "Jan 7, 2025 at 10:15 AM",
  },
  {
    title: "Lighting Package for Commercial Shoot",
    location: "Atlanta, GA",
    dateRange: "Feb 1 - Feb 3, 2025",
    status: "Accepted",
    categories: ["Lighting", "Grip"],
    submitted: "Jan 5, 2025 at 4:45 PM",
  },
  {
    title: "Drone Equipment for Documentary",
    location: "San Francisco, CA",
    dateRange: "Jan 18 - Jan 22, 2025",
    status: "Open",
    categories: ["Drone", "Aerial"],
    submitted: "Jan 6, 2025 at 11:20 AM",
  },
]

export const statusColors = {
  Open: "border-1-4 bg-green-100 text-green-700 border-green-400",
  Closed: "bg-gray-100 text-gray-600 border-gray-300",
  Accepted: "bg-sky-100 text-sky-700 border-sky-400",
}

export const statusIconColors = {
  Open: "bg-green-700",
  Closed: "bg-gray-600",
  Accepted: "bg-sky-700",
}

export const tagColors = {
  Camera: "bg-blue-100 text-blue-700",
  Lens: "bg-blue-100 text-blue-700",
  Stabilizer: "bg-blue-100 text-blue-700",
  Lighting: "bg-blue-100 text-blue-700",
  Power: "bg-blue-100 text-blue-700",
  Audio: "bg-blue-100 text-blue-700",
  Accessories: "bg-blue-100 text-blue-700",
}
