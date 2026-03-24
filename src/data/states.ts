export interface City {
  name: string;
  slug: string;
  population?: string;
  medianHomePrice?: string;
  description: string;
}

export interface StateData {
  name: string;
  abbreviation: string;
  slug: string;
  capital: string;
  conformingLoanLimit: string;
  medianHomePrice: string;
  cities: City[];
  description: string;
  housingHighlight: string;
}

export const states: StateData[] = [
  {
    name: "California",
    abbreviation: "CA",
    slug: "california",
    capital: "Sacramento",
    conformingLoanLimit: "$1,149,825",
    medianHomePrice: "$793,600",
    description: "California remains one of the most competitive housing markets in the nation. From the coastal communities of Southern California to the tech hubs of the Bay Area, homebuyers need a lender who understands high-cost area lending, jumbo loans, and the unique dynamics of the Golden State market.",
    housingHighlight: "High-cost area with elevated conforming loan limits in most counties",
    cities: [
      { name: "Los Angeles", slug: "los-angeles", population: "3,898,747", medianHomePrice: "$950,000", description: "The entertainment capital of the world offers diverse neighborhoods from beachside Santa Monica to hillside Silver Lake. LA's sprawling metro area provides options for every budget, though competition remains fierce in desirable zip codes." },
      { name: "San Francisco", slug: "san-francisco", population: "873,965", medianHomePrice: "$1,350,000", description: "San Francisco's iconic neighborhoods and booming tech economy make it one of the most expensive housing markets nationally. Buyers here often leverage jumbo loans and benefit from understanding condo-specific financing." },
      { name: "San Diego", slug: "san-diego", population: "1,386,932", medianHomePrice: "$875,000", description: "San Diego combines year-round sunshine with a thriving biotech and military economy. The housing market offers everything from downtown condos to suburban family homes, with strong demand driven by quality of life." },
      { name: "San Jose", slug: "san-jose", population: "1,013,240", medianHomePrice: "$1,400,000", description: "At the heart of Silicon Valley, San Jose consistently ranks among the most expensive metro areas in the country. Tech industry salaries support the high price points, and buyers frequently use jumbo loan products." },
      { name: "Sacramento", slug: "sacramento", population: "524,943", medianHomePrice: "$485,000", description: "California's capital city has seen tremendous growth as remote workers seek affordability relative to Bay Area prices. Sacramento offers a lower cost of entry into California homeownership with strong appreciation potential." },
    ],
  },
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    capital: "Austin",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$340,000",
    description: "Texas offers some of the most affordable housing in the country with no state income tax, making it a magnet for families and businesses relocating from higher-cost states. The Lone Star State's diverse metro areas each present unique opportunities for homebuyers.",
    housingHighlight: "No state income tax and strong job growth drive housing demand",
    cities: [
      { name: "Houston", slug: "houston", population: "2,304,580", medianHomePrice: "$320,000", description: "Houston's energy sector and medical center fuel a robust economy with surprisingly affordable housing. The nation's fourth-largest city offers new construction and established neighborhoods with room to grow." },
      { name: "Dallas", slug: "dallas", population: "1,304,379", medianHomePrice: "$375,000", description: "The Dallas-Fort Worth metroplex is one of the fastest-growing regions in America. Corporate relocations and a business-friendly climate create steady housing demand across a range of price points." },
      { name: "Austin", slug: "austin", population: "978,908", medianHomePrice: "$450,000", description: "Austin's tech boom has transformed the capital city into a major housing market. While prices have risen significantly, the city continues to attract buyers with its vibrant culture, job opportunities, and quality of life." },
      { name: "San Antonio", slug: "san-antonio", population: "1,434,625", medianHomePrice: "$275,000", description: "San Antonio offers exceptional affordability combined with a rich cultural heritage and growing economy. Military installations and a booming healthcare sector provide stable employment for homebuyers." },
      { name: "Fort Worth", slug: "fort-worth", population: "918,915", medianHomePrice: "$330,000", description: "Fort Worth combines western heritage with modern growth. As part of the DFW metroplex, it offers more affordable options than neighboring Dallas while providing access to the same thriving job market." },
    ],
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    capital: "Tallahassee",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$404,100",
    description: "The Sunshine State attracts buyers with warm weather, no state income tax, and a diverse range of communities. Florida's housing market ranges from affordable inland communities to premium coastal properties, with strong demand from retirees, families, and investors alike.",
    housingHighlight: "No state income tax and year-round warm climate attract nationwide buyers",
    cities: [
      { name: "Miami", slug: "miami", population: "442,241", medianHomePrice: "$575,000", description: "Miami's international flair and waterfront lifestyle drive premium home prices. The market features everything from luxury condos in Brickell to single-family homes in Coral Gables, with strong interest from domestic and international buyers." },
      { name: "Tampa", slug: "tampa", population: "384,959", medianHomePrice: "$390,000", description: "Tampa Bay has emerged as one of Florida's hottest housing markets, offering relative affordability compared to South Florida. The area's growing tech scene and waterfront living attract young professionals and families." },
      { name: "Orlando", slug: "orlando", population: "307,573", medianHomePrice: "$370,000", description: "Beyond the theme parks, Orlando is a rapidly growing metro with a diversifying economy. The housing market offers strong value compared to coastal markets, with new construction and established communities." },
      { name: "Jacksonville", slug: "jacksonville", population: "949,611", medianHomePrice: "$340,000", description: "As the largest city by area in the contiguous US, Jacksonville offers affordable beachside and urban living. The Naval presence and growing financial sector provide stable employment for homebuyers." },
    ],
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    capital: "Albany",
    conformingLoanLimit: "$1,149,825",
    medianHomePrice: "$420,000",
    description: "New York State presents a tale of two markets: the ultra-competitive New York City metropolitan area with some of the highest prices in the nation, and the more affordable upstate communities. Understanding co-op vs. condo financing and high-cost area loan limits is essential for Empire State buyers.",
    housingHighlight: "High-cost metro area with elevated loan limits in NYC and surrounding counties",
    cities: [
      { name: "New York City", slug: "new-york-city", population: "8,336,817", medianHomePrice: "$750,000", description: "The Big Apple's housing market is unlike any other in America. From Manhattan condos to Brooklyn brownstones and Queens co-ops, navigating NYC real estate requires specialized lending knowledge and an understanding of unique property types." },
      { name: "Buffalo", slug: "buffalo", population: "278,349", medianHomePrice: "$225,000", description: "Buffalo's revitalized waterfront and affordable housing market make it attractive for first-time buyers. The city offers historic architecture and strong community character at a fraction of downstate prices." },
      { name: "Albany", slug: "albany", population: "99,224", medianHomePrice: "$260,000", description: "As the state capital, Albany benefits from stable government employment and a growing tech sector. The Capital Region offers affordable homeownership with easy access to the Adirondacks and New England." },
    ],
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    slug: "illinois",
    capital: "Springfield",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$250,000",
    description: "Illinois offers a wide spectrum of housing options, from Chicago's urban condos and historic neighborhoods to the affordable small towns and suburbs throughout the state. The Prairie State provides value for buyers seeking both metropolitan and rural lifestyles.",
    housingHighlight: "Chicago metro drives demand while downstate offers exceptional affordability",
    cities: [
      { name: "Chicago", slug: "chicago", population: "2,696,555", medianHomePrice: "$340,000", description: "Chicago's diverse neighborhoods offer something for every buyer, from Lincoln Park's tree-lined streets to the West Loop's modern condos. The city's world-class dining, culture, and lakefront make it a perennial favorite." },
      { name: "Aurora", slug: "aurora", population: "180,542", medianHomePrice: "$295,000", description: "Aurora and the surrounding western suburbs provide affordable alternatives to Chicago with excellent schools and easy Metra commuter rail access. Growing families find strong value in this area." },
      { name: "Naperville", slug: "naperville", population: "149,540", medianHomePrice: "$475,000", description: "Consistently ranked among the best places to live in the US, Naperville offers top-rated schools, a vibrant downtown, and well-maintained neighborhoods. It attracts families willing to invest in quality suburban living." },
    ],
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    slug: "georgia",
    capital: "Atlanta",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$330,000",
    description: "Georgia's housing market is anchored by metro Atlanta, one of the most dynamic real estate markets in the Southeast. The Peach State offers a combination of southern charm, strong job growth, and relative affordability compared to other major metro areas.",
    housingHighlight: "Atlanta metro is a top destination for corporate relocations and job seekers",
    cities: [
      { name: "Atlanta", slug: "atlanta", population: "498,715", medianHomePrice: "$400,000", description: "Atlanta's diverse economy spanning tech, film, logistics, and healthcare creates steady housing demand. The city's neighborhoods range from the historic charm of Inman Park to modern developments in Midtown and Buckhead." },
      { name: "Savannah", slug: "savannah", population: "147,780", medianHomePrice: "$295,000", description: "Savannah's historic district and coastal lifestyle attract buyers seeking southern charm at an accessible price point. The port city's growing economy and tourism industry support a healthy housing market." },
      { name: "Augusta", slug: "augusta", population: "202,081", medianHomePrice: "$215,000", description: "Home to the Masters Tournament and a growing cybersecurity hub at Fort Eisenhower, Augusta offers affordable homeownership with a military-supported economy. First-time buyers find exceptional value here." },
    ],
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    slug: "arizona",
    capital: "Phoenix",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$420,000",
    description: "Arizona's housing market has experienced tremendous growth driven by an influx of residents from higher-cost states. The Grand Canyon State offers year-round sunshine, a lower cost of living, and a rapidly expanding job market centered around the Phoenix metropolitan area.",
    housingHighlight: "Rapid population growth and new construction define Arizona's housing landscape",
    cities: [
      { name: "Phoenix", slug: "phoenix", population: "1,608,139", medianHomePrice: "$430,000", description: "Phoenix is one of the fastest-growing large cities in America. The Valley of the Sun offers new construction, master-planned communities, and established neighborhoods with strong appreciation over the past decade." },
      { name: "Tucson", slug: "tucson", population: "542,629", medianHomePrice: "$320,000", description: "Tucson provides a more affordable alternative to Phoenix while offering its own unique desert lifestyle and the University of Arizona's economic influence. Buyers find great value in this culturally rich city." },
      { name: "Scottsdale", slug: "scottsdale", population: "241,361", medianHomePrice: "$650,000", description: "Scottsdale's luxury real estate market features resort-style living, golf communities, and upscale dining. Buyers here often leverage jumbo loans to finance premium properties in one of Arizona's most desirable cities." },
      { name: "Mesa", slug: "mesa", population: "504,258", medianHomePrice: "$410,000", description: "Mesa offers suburban living in the East Valley with growing employment centers and family-friendly communities. As the third-largest city in Arizona, it provides diverse housing options at moderate price points." },
    ],
  },
  {
    name: "Washington",
    abbreviation: "WA",
    slug: "washington",
    capital: "Olympia",
    conformingLoanLimit: "$1,149,825",
    medianHomePrice: "$575,000",
    description: "Washington State's housing market is driven by the Puget Sound region's tech economy, with major employers creating sustained demand for housing. The Evergreen State also features no state income tax, making it attractive for high earners and families alike.",
    housingHighlight: "Tech industry employment and no state income tax support strong housing demand",
    cities: [
      { name: "Seattle", slug: "seattle", population: "737,015", medianHomePrice: "$825,000", description: "Seattle's housing market is fueled by major tech employers and a vibrant urban culture. The city's distinct neighborhoods offer everything from houseboats to modern high-rises, with strong demand keeping the market competitive." },
      { name: "Tacoma", slug: "tacoma", population: "219,346", medianHomePrice: "$475,000", description: "Tacoma has become a popular alternative to Seattle, offering lower prices with easy access to the larger metro area. The city's revitalized downtown and waterfront have attracted a wave of new homebuyers." },
      { name: "Spokane", slug: "spokane", population: "228,989", medianHomePrice: "$370,000", description: "Eastern Washington's largest city offers dramatically more affordable housing than the Seattle metro. Spokane's outdoor recreation access and growing remote-worker population are driving steady market growth." },
      { name: "Bellevue", slug: "bellevue", population: "151,854", medianHomePrice: "$1,200,000", description: "Bellevue's transformation into a tech hub with major corporate campuses has made it one of the most expensive markets in the Pacific Northwest. Buyers here rely on jumbo financing and competitive offer strategies." },
    ],
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    slug: "colorado",
    capital: "Denver",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$540,000",
    description: "Colorado's outdoor lifestyle and booming economy have made it one of the most popular relocation destinations in the country. The Centennial State's housing market offers mountain town charm, suburban family communities, and urban living along the Front Range corridor.",
    housingHighlight: "Strong appreciation driven by lifestyle migration and tech sector growth",
    cities: [
      { name: "Denver", slug: "denver", population: "713,252", medianHomePrice: "$575,000", description: "Denver's housing market reflects the city's status as a top destination for young professionals and outdoor enthusiasts. The Mile High City offers vibrant neighborhoods like RiNo, LoHi, and Capitol Hill with strong appreciation." },
      { name: "Colorado Springs", slug: "colorado-springs", population: "478,961", medianHomePrice: "$450,000", description: "Colorado Springs combines military installations, a growing tech sector, and stunning Pikes Peak views with more affordable housing than Denver. The city is a top choice for families and veterans." },
      { name: "Aurora", slug: "aurora", population: "386,261", medianHomePrice: "$475,000", description: "Aurora provides a more affordable entry point to the Denver metro market while offering its own employment centers and diverse communities. The city spans three counties and offers varied housing options." },
      { name: "Boulder", slug: "boulder", population: "105,673", medianHomePrice: "$875,000", description: "Boulder's university town atmosphere, outdoor recreation access, and strict growth boundaries create a premium housing market. Buyers seeking the Boulder lifestyle should be prepared for competitive pricing." },
    ],
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    slug: "north-carolina",
    capital: "Raleigh",
    conformingLoanLimit: "$766,550",
    medianHomePrice: "$340,000",
    description: "North Carolina has emerged as one of the top relocation destinations in the Southeast, with the Research Triangle and Charlotte metro leading growth. The Tar Heel State offers a combination of affordability, strong job markets, and quality of life that attracts buyers from across the country.",
    housingHighlight: "Research Triangle and Charlotte metro areas lead Southeast housing growth",
    cities: [
      { name: "Charlotte", slug: "charlotte", population: "874,579", medianHomePrice: "$380,000", description: "Charlotte's banking industry and rapid corporate growth make it the economic engine of the Carolinas. The Queen City offers diverse neighborhoods from the urban South End to the suburban communities of Ballantyne and Huntersville." },
      { name: "Raleigh", slug: "raleigh", population: "467,665", medianHomePrice: "$415,000", description: "Raleigh sits at the heart of the Research Triangle, benefiting from major universities and a thriving tech ecosystem. The city consistently ranks among the best places to live and offers strong housing value." },
      { name: "Durham", slug: "durham", population: "283,506", medianHomePrice: "$370,000", description: "Durham has transformed from a tobacco town to a vibrant hub for biotech, education, and food culture. Duke University anchors the economy, and revitalized neighborhoods offer strong buying opportunities." },
      { name: "Asheville", slug: "asheville", population: "94,067", medianHomePrice: "$420,000", description: "Nestled in the Blue Ridge Mountains, Asheville attracts buyers seeking an artsy mountain lifestyle. The city's craft brewery scene, arts community, and outdoor access drive demand in this unique market." },
    ],
  },
];
