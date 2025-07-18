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
