/**
 * MOVING TO LEBANON GUIDE DATA
 *
 * Comprehensive relocation data for the "Moving to Lebanon" mega guide.
 * Sources: city websites, chamber of commerce, school district, AllTrails,
 * Samaritan Health, local business directories.
 * Last verified: April 2026.
 */

// ─── CITY SERVICES ──────────────────────────────────────────
export interface CityService {
  name: string;
  description: string;
  phone?: string;
  address?: string;
  website?: string;
  hours?: string;
}

export const cityServices: CityService[] = [
  {
    name: "City Hall",
    description:
      "Main administrative office for the City of Lebanon. Handles permits, business licenses, municipal court, and general inquiries.",
    phone: "541-258-4905",
    address: "925 S Main Street, Lebanon, OR 97355",
    website: "https://www.lebanonoregon.gov/",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    name: "Water & Sewer Utilities",
    description:
      "Start/stop service when you move in. Handles billing, water quality, and after-hours emergencies.",
    phone: "541-258-4913",
    address: "925 S Main Street (City Hall)",
    website: "https://www.lebanonoregon.gov/181/Departments",
    hours: "Mon–Fri 8:00 AM – 4:00 PM",
  },
  {
    name: "Police Department",
    description:
      "Community-oriented policing for the City of Lebanon. Non-emergency line for reports, neighborhood concerns, and general questions.",
    phone: "541-451-1751 (non-emergency)",
    website: "https://www.ci.lebanon.or.us/270/Police",
  },
  {
    name: "Lebanon Fire District",
    description:
      "Fire suppression, emergency medical services, hazmat response, and fire prevention education.",
    phone: "541-451-1901",
    address: "1050 W Oak Street, Lebanon, OR 97355",
    website: "https://www.lebanonfireoregon.gov",
    hours: "Office: Mon–Fri 8:00 AM – 5:00 PM",
  },
  {
    name: "Lebanon Public Library",
    description:
      "Free public computers, Wi-Fi, children's programs, book clubs, and community meeting rooms. A library card is free for Linn County residents.",
    phone: "541-258-4926",
    address: "55 Academy Street, Lebanon, OR 97355",
    website: "https://leblibrary.com/",
    hours: "Mon–Thu 10 AM – 7 PM, Fri–Sat 12 – 5 PM",
  },
  {
    name: "Parks & Recreation",
    description:
      "Manages 300+ acres of parks, trails, sports fields, and community facilities including Cheadle Lake Park.",
    phone: "541-258-4917",
    website: "https://www.lebanonoregon.gov/373/Parks-Facilities",
    hours: "Parks open 7 AM – 10 PM daily",
  },
];

// ─── SCHOOLS ────────────────────────────────────────────────
export interface School {
  name: string;
  type: "Elementary" | "Middle" | "High School" | "K-8" | "Charter" | "Alternative";
  grades: string;
  enrollment?: number;
  rating?: string;
  ratingSource?: string;
  website?: string;
  reviewUrl?: string;
  highlight?: string;
}

export const schoolDistrict = {
  name: "Lebanon Community School District 9",
  students: 4065,
  schools: 10,
  graduationRate: "91%",
  phone: "541-451-8511",
  address: "485 S 5th Street, Lebanon, OR 97355",
  website: "https://www.lebanon.k12.or.us/",
  greatSchoolsUrl: "https://www.greatschools.org/oregon/lebanon/",
  nicheUrl:
    "https://www.niche.com/k12/d/lebanon-community-school-district-or/",
};

export const schools: School[] = [
  {
    name: "Lebanon High School",
    type: "High School",
    grades: "9–12",
    enrollment: 1240,
    rating: "5/10",
    ratingSource: "GreatSchools",
    website: "https://high-school.lebanon.k12.or.us/",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/1663-Lebanon-High-School/",
  },
  {
    name: "Seven Oak Middle School",
    type: "Middle",
    grades: "7–8",
    website: "https://www.lebanon.k12.or.us/",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Cascades Elementary",
    type: "Elementary",
    grades: "K–6",
    rating: "6/10",
    ratingSource: "GreatSchools",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Pioneer Elementary",
    type: "Elementary",
    grades: "K–6",
    rating: "4/10",
    ratingSource: "GreatSchools",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Green Acres Elementary",
    type: "Elementary",
    grades: "K–6",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Riverview Elementary",
    type: "Elementary",
    grades: "K–6",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Sand Ridge Charter School",
    type: "Charter",
    grades: "K–8",
    enrollment: 333,
    rating: "Top 10% statewide",
    ratingSource: "PublicSchoolReview",
    highlight: "Gifted & talented focus — one of the highest-rated schools in the region",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/1677-Sand-Ridge-Charter-School/",
  },
  {
    name: "Hamilton Creek K-8",
    type: "K-8",
    grades: "K–8",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
  {
    name: "Lacomb K-8",
    type: "K-8",
    grades: "K–8",
    rating: "3/10",
    ratingSource: "GreatSchools",
    highlight: "Small rural school east of town",
    reviewUrl: "https://www.greatschools.org/oregon/lebanon/",
  },
];

// ─── EMPLOYERS ──────────────────────────────────────────────
export interface Employer {
  name: string;
  industry: string;
  employees?: string;
  description: string;
  website?: string;
}

export const employers: Employer[] = [
  {
    name: "Samaritan Lebanon Community Hospital",
    industry: "Healthcare",
    employees: "1,000+",
    description:
      "25-bed critical access hospital and Level IV trauma center. Part of the Samaritan Health Services network. Established 1917.",
    website: "https://samhealth.org/find-a-location/samaritan-lebanon-community-hospital/",
  },
  {
    name: "Lowe's Regional Distribution Center",
    industry: "Logistics & Distribution",
    employees: "650+",
    description:
      "One of the largest employers in Lebanon. Regional distribution hub for Lowe's home improvement stores across the Pacific Northwest.",
  },
  {
    name: "Entek International",
    industry: "Manufacturing",
    employees: "700+",
    description:
      "Global leader in polyethylene battery separator manufacturing. Founded in Lebanon in 1984.",
  },
  {
    name: "Weyerhaeuser",
    industry: "Forestry & Wood Products",
    employees: "1,300+",
    description:
      "Major timber and wood products company with operations in Lebanon since 1906. One of the area's historic employers.",
  },
  {
    name: "Lebanon Community Schools",
    industry: "Education",
    description:
      "School district employing teachers, staff, and administrators across 10 campuses.",
    website: "https://www.lebanon.k12.or.us/",
  },
  {
    name: "Walmart Supercenter",
    industry: "Retail",
    description:
      "Major retail employer on the south end of town. Grocery, pharmacy, and general merchandise.",
  },
  {
    name: "City of Lebanon",
    industry: "Government",
    description:
      "Municipal government including police, fire, public works, parks, and administration.",
    website: "https://www.lebanonoregon.gov/",
  },
];

// ─── HEALTHCARE ─────────────────────────────────────────────
export interface HealthcareProvider {
  name: string;
  type: string;
  address: string;
  phone?: string;
  hours?: string;
  website?: string;
  description: string;
}

export const healthcare: HealthcareProvider[] = [
  {
    name: "Samaritan Lebanon Community Hospital",
    type: "Hospital",
    address: "525 N Santiam Highway, Lebanon, OR 97355",
    description:
      "25-bed critical access hospital with a Level IV trauma center. Full emergency department, surgical services, imaging, and lab. Part of Samaritan Health Services.",
    website: "https://samhealth.org/find-a-location/samaritan-lebanon-community-hospital/",
  },
  {
    name: "BestMed Urgent & Primary Care",
    type: "Urgent Care",
    address: "3400 Cooperative Way, Lebanon, OR",
    hours: "Mon–Sat 8 AM – 8 PM, Sun 8 AM – 6 PM",
    description:
      "Walk-in urgent care and primary care clinic. No appointment needed for most visits.",
  },
  {
    name: "Samaritan Urgent Care",
    type: "Urgent Care",
    address: "35 Mullins Drive, Lebanon, OR",
    description:
      "Urgent care facility connected to the Samaritan Health network.",
    website: "https://samhealth.org/",
  },
  {
    name: "Ridgeway Health",
    type: "Primary Care",
    address: "41 E Ash Street, Lebanon, OR 97355",
    description:
      "Primary care and urgent care with 24/7 on-call provider for after-hours needs.",
  },
];

// ─── OUTDOOR RECREATION ─────────────────────────────────────
export interface RecArea {
  name: string;
  type: string;
  description: string;
  distance?: string;
  highlights: string[];
  website?: string;
}

export const recreation: RecArea[] = [
  {
    name: "Cheadle Lake Park",
    type: "City Park",
    description:
      "Lebanon's flagship 35-acre regional park with a scenic lake, paved trails, and wildlife viewing platforms.",
    highlights: [
      "1.7-mile paved loop trail (wheelchair accessible)",
      "Non-motorized boating, kayaking, and fishing",
      "Bald eagle and osprey nesting areas",
      "Home of the annual Strawberry Festival",
    ],
  },
  {
    name: "South Santiam River",
    type: "River & Water Recreation",
    description:
      "The South Santiam flows right through Lebanon and is one of the area's best summer recreation spots.",
    highlights: [
      "4.1-mile Bates Bridge to Waterloo float",
      "3-mile Diversion Dam to Gills Landing paddle",
      "Swimming holes and riverside parks",
      "Steelhead and salmon fishing",
    ],
  },
  {
    name: "McDowell Creek Falls",
    type: "Hiking & Waterfalls",
    description:
      "Easy family-friendly hike through old-growth forest to multiple waterfalls, just 20 minutes from Lebanon.",
    distance: "~12 miles east",
    highlights: [
      "Royal Terrace Falls and Majestic Falls",
      "295 ft elevation gain (easy difficulty)",
      "Lush forest canopy year-round",
    ],
    website: "https://www.alltrails.com/trail/us/oregon/mcdowell-creek-falls-loop",
  },
  {
    name: "Mount Jefferson Wilderness",
    type: "Backcountry & Alpine",
    description:
      "109,000 acres of alpine wilderness with 150+ lakes, 163 miles of trails, and Oregon's second-highest peak at 10,497 ft.",
    distance: "~60 miles east via Hwy 22",
    highlights: [
      "Pamelia Lake and Jefferson Park trailheads",
      "Alpine meadows, glacial lakes, volcanic peaks",
      "Permit required June 15 – October 15",
    ],
    website: "https://www.recreation.gov/",
  },
  {
    name: "300+ Acres of City Parks",
    type: "City Park System",
    description:
      "Lebanon's park system includes sports fields, playgrounds, picnic areas, and walking trails throughout the city.",
    highlights: [
      "Gill's Landing — river access for fishing and launching",
      "Pioneer Cemetery Park — walking paths and green space",
      "Numerous neighborhood pocket parks",
    ],
    website: "https://www.lebanonoregon.gov/373/Parks-Facilities",
  },
];

// ─── GYMS & FITNESS ─────────────────────────────────────────
export const gyms = [
  { name: "Mid-Willamette Family YMCA", website: "https://lebanonymca.org/", type: "Community Center & Gym" },
  { name: "SamFit Lebanon", type: "Fitness Center" },
  { name: "NWFit", type: "Fitness Center" },
  { name: "Fitness 1440", type: "24-Hour Gym" },
  { name: "Anytime Fitness", type: "24-Hour Gym" },
  { name: "Willamette Valley CrossFit", type: "CrossFit Box" },
  { name: "Physiq Fitness", type: "Fitness Center" },
  { name: "Downings Gym", type: "Weight Training" },
];

// ─── COMMUNITY ORGANIZATIONS ────────────────────────────────
export const organizations = [
  {
    name: "Lebanon Area Chamber of Commerce",
    description: "Business networking, visitor center, and community event coordination.",
    website: "https://lebanon-chamber.org/",
  },
  {
    name: "Rotary Club of Lebanon",
    description: "Service club focused on community improvement and charitable giving.",
  },
  {
    name: "Kiwanis Club",
    description: "Volunteer organization dedicated to improving children's lives in the community.",
  },
  {
    name: "Lebanon Area Habitat for Humanity",
    description: "Builds affordable homes and runs a ReStore for donated building materials.",
  },
  {
    name: "Lebanon Downtown Association",
    description: "Promotes downtown businesses, organizes community events, and supports revitalization.",
  },
  {
    name: "Linn County Arts Guild",
    description: "Supports local artists and hosts exhibitions and art events.",
  },
  {
    name: "Strawberry Festival Association",
    description: "Organizes Lebanon's largest annual event — the Strawberry Festival each June.",
    website: "https://www.lebanonstrawberryfest.com/",
  },
];

// ─── ONLINE COMMUNITIES ─────────────────────────────────────
export const onlineCommunities = [
  {
    name: "Nextdoor — Lebanon",
    description: "Neighborhood-level social network for local tips, recommendations, buy/sell, and community updates.",
    url: "https://nextdoor.com/city/lebanon--or/",
    platform: "Nextdoor",
  },
  {
    name: "Lebanon Area Chamber (Facebook)",
    description: "Official chamber page with business news, events, and community updates.",
    url: "https://www.facebook.com/lebanonchamberofcommerce/",
    platform: "Facebook",
  },
  {
    name: "Lebanon Strawberry Festival (Facebook)",
    description: "Updates, lineup announcements, and photos from Lebanon's biggest annual event.",
    url: "https://www.facebook.com/lebanonstrawberryfestival/",
    platform: "Facebook",
  },
  {
    name: "Lebanon Public Library (Facebook)",
    description: "Programs, events, and new arrivals at the Lebanon Public Library.",
    url: "https://www.facebook.com/LebanonOregonLibrary/",
    platform: "Facebook",
  },
  {
    name: "r/oregon",
    description: "Statewide Reddit community — search for Lebanon threads or ask questions about moving.",
    url: "https://www.reddit.com/r/oregon/",
    platform: "Reddit",
  },
  {
    name: "r/corvallis",
    description: "Nearby Corvallis Reddit community. Lebanon residents often participate here for Willamette Valley discussion.",
    url: "https://www.reddit.com/r/corvallis/",
    platform: "Reddit",
  },
];

// ─── EVENTS & CALENDAR ─────────────────────────────────────
export const events = [
  {
    name: "Lebanon Strawberry Festival",
    timing: "First full weekend in June",
    location: "Cheadle Lake Park",
    description:
      "Lebanon's signature community event featuring parades, live music, carnival rides, strawberry shortcake eating contests, fireworks, and vendor booths. Runs Thursday evening through Saturday night.",
    website: "https://www.lebanonstrawberryfest.com/",
  },
  {
    name: "Lebanon Downtown Farmers Market",
    timing: "Thursdays, mid-May through mid-October, 2–6 PM",
    location: "S Main Street & W Grant Street",
    description:
      "Local produce, baked goods, crafts, and live music. Accepts SNAP/EBT with Double Up Food Bucks Oregon.",
  },
  {
    name: "Community Events Calendar",
    timing: "Year-round",
    description:
      "The City of Lebanon maintains an official community events calendar online.",
    website: "https://www.lebanonoregon.gov/Calendar.aspx",
  },
];

// ─── SHOPPING & DAILY LIFE ──────────────────────────────────
export const shopping = {
  grocery: [
    { name: "Safeway", address: "1983 S Main Street", hours: "6 AM – 11 PM", note: "Pharmacy, online ordering, delivery" },
    { name: "Walmart Supercenter", address: "3290 S Santiam Highway", note: "Full grocery, pharmacy, pickup/delivery" },
    { name: "Grocery Outlet", note: "Budget-friendly discount grocery" },
    { name: "Everyone's Market", note: "Local grocery option" },
  ],
  farmersMarket: {
    name: "Lebanon Downtown Farmers Market",
    location: "S Main Street & W Grant Street",
    season: "Mid-May through mid-October",
    hours: "Thursdays 2–6 PM",
  },
};

// ─── TRANSPORTATION ─────────────────────────────────────────
export const transportation = {
  local: [
    {
      name: "LINX Dial-A-Bus",
      description: "Curb-to-curb public transit within Lebanon city limits. Open to all riders.",
      hours: "Mon–Fri 7 AM – 5:50 PM",
    },
    {
      name: "Linn Shuttle",
      description: "Fixed route connecting Sweet Home → Lebanon → Albany, with Amtrak and transit connections in Albany.",
    },
  ],
  airports: [
    { name: "Portland International Airport (PDX)", distance: "~90 miles north (1.5 hrs)", note: "Major international hub" },
    { name: "Eugene Airport (EUG)", distance: "~65 miles south (1 hr)", note: "Regional airport with major carriers" },
  ],
  nearestCities: [
    { name: "Albany", distance: "~20 miles", driveTime: "25 min" },
    { name: "Corvallis", distance: "~25 miles", driveTime: "30 min" },
    { name: "Salem", distance: "~60 miles", driveTime: "1 hr" },
    { name: "Eugene", distance: "~65 miles", driveTime: "1 hr" },
    { name: "Portland", distance: "~90 miles", driveTime: "1.5 hrs" },
  ],
};

// ─── FAQ ────────────────────────────────────────────────────
export const movingFaqs = [
  {
    question: "What is the cost of living in Lebanon, Oregon?",
    answer:
      "Lebanon is one of the most affordable communities in the Willamette Valley. The median home price is around $395,000 — significantly lower than Corvallis ($485K) and about 25% below the state average. Groceries, utilities, and everyday costs are in line with rural Oregon averages. There is no sales tax in Oregon.",
  },
  {
    question: "Is Lebanon a safe place to live?",
    answer:
      "Lebanon is a quiet, family-oriented community. Like any small city, crime rates vary by neighborhood, but overall it is considered safe. The Lebanon Police Department is community-oriented and responsive. We recommend checking current crime statistics on the city's website or sites like NeighborhoodScout.",
  },
  {
    question: "What is the weather like in Lebanon?",
    answer:
      "Lebanon has a mild Pacific Northwest climate. Summers (June–September) are warm and dry with highs in the 80s–90s°F. Winters are cool and wet with highs in the 40s–50s°F and occasional light snow. Spring and fall are mild with stunning valley and mountain views. Annual rainfall is about 47 inches, mostly October through March.",
  },
  {
    question: "How are the schools in Lebanon?",
    answer:
      "Lebanon Community School District 9 serves about 4,065 students across 10 schools with a 91% graduation rate. Sand Ridge Charter School is a standout — ranked in the top 10% of Oregon schools. The district offers K–12 education plus charter and alternative options. See our full school guide for details.",
  },
  {
    question: "What is there to do outdoors in Lebanon?",
    answer:
      "Lebanon is a gateway to the Cascade Range with incredible outdoor access. Cheadle Lake Park has 35 acres of trails and lake activities. The South Santiam River offers floating, fishing, and kayaking. McDowell Creek Falls is a quick 20-minute drive for waterfall hikes. Mount Jefferson Wilderness is about an hour east for alpine hiking and camping.",
  },
  {
    question: "Is Lebanon a good place to raise a family?",
    answer:
      "Many families choose Lebanon for its combination of small-town safety, affordable housing, good schools, and easy access to outdoor recreation. The community hosts family-friendly events throughout the year, including the popular Strawberry Festival in June. Neighborhoods like South Lebanon and Hamilton Creek are particularly popular with families.",
  },
  {
    question: "How far is Lebanon from major cities?",
    answer:
      "Lebanon is centrally located in the Willamette Valley. Albany is 20 miles north (25 min), Corvallis is 25 miles west (30 min), Salem is about 60 miles north (1 hr), Eugene is 65 miles south (1 hr), and Portland is 90 miles north (1.5 hrs). The Oregon Coast is about 1.5 hours west.",
  },
  {
    question: "Does Lebanon have public transportation?",
    answer:
      "Lebanon has the LINX Dial-A-Bus for in-town curb-to-curb service (Mon–Fri) and the Linn Shuttle connecting to Albany, where you can connect to Amtrak and regional bus networks. Most residents drive — the town is easy to navigate with minimal traffic.",
  },
];
