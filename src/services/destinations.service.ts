const articles = [
  {
    id: 1,
    title: "When is the best time to visit Buenos Aires?",
    destination: "Buenos Aires",
    image:
      "/assets/portrait/buildings/allahverdi-israfilli-efoNPPTGsVU-unsplash.jpg",
    link: "/destinations/buenos-aires",
  },
  {
    id: 2,
    title: "Warsaw vs Kraków: which Polish city will win your heart?",
    destination: "Warsaw",
    image:
      "/assets/portrait/nature/johannes-andersson-UCd78vfC8vU-unsplash.jpg",
    link: "/destinations/warsaw",
  },
  {
    id: 3,
    title: "The 10 best things to do in Edinburgh",
    destination: "Edinburgh",
    image: "/assets/portrait/buildings/jahanzeb-ahsan-YYHcWSou3WM-unsplash.jpg",
    link: "/destinations/edinburgh",
  },
];

const where_to_next_destinations = [
  {
    id: 1,
    name: "Vienna",
    image: "/assets/portrait/buildings/vienna.jpg",
    isTrending: true,
  },
  {
    id: 2,
    name: "Budapest",
    image: "/assets/portrait/buildings/budapest.jpg",
    isTrending: false,
  },
  {
    id: 3,
    name: "Singapore",
    image: "/assets/portrait/nature/singapore.jpg",
    isTrending: false,
  },
];

const countries = [
  {
    name: "Israel",
    geolocation: { lat: 31.0461, lng: 34.8516 },
    language: "Hebrew",
    flagIcon: "🇮🇱",
  },
  {
    name: "Japan",
    geolocation: { lat: 35.682839, lng: 139.759455 },
    language: "Japanese",
    flagIcon: "🇯🇵",
  },
  {
    name: "Germany",
    geolocation: { lat: 51.1657, lng: 10.4515 },
    language: "German",
    flagIcon: "🇩🇪",
  },
  {
    name: "Brazil",
    geolocation: { lat: -14.235, lng: -51.9253 },
    language: "Portuguese",
    flagIcon: "🇧🇷",
  },
  {
    name: "Canada",
    geolocation: { lat: 56.1304, lng: -106.3468 },
    language: "English, French",
    flagIcon: "🇨🇦",
  },
  {
    name: "India",
    geolocation: { lat: 20.5937, lng: 78.9629 },
    language: "Hindi, English",
    flagIcon: "🇮🇳",
  },
  {
    name: "Australia",
    geolocation: { lat: -25.2744, lng: 133.7751 },
    language: "English",
    flagIcon: "🇦🇺",
  },
  {
    name: "Russia",
    geolocation: { lat: 61.524, lng: 105.3188 },
    language: "Russian",
    flagIcon: "🇷🇺",
  },
  {
    name: "Italy",
    geolocation: { lat: 41.8719, lng: 12.5674 },
    language: "Italian",
    flagIcon: "🇮🇹",
  },
];

const destinations = [
  {
    name: "Buenos Aires",
    image:
      "/assets/portrait/buildings/allahverdi-israfilli-efoNPPTGsVU-unsplash.jpg",
    description:
      "The vibrant capital of Argentina, known for its European-style architecture, tango, and rich cultural scene.",
    highlights: [
      "Visit the colorful neighborhood of La Boca",
      "Explore the historic Teatro Colón",
      "Relax at the beautiful Bosques de Palermo",
    ],
    itinerary: [
      "Day 1: Arrival and city tour",
      "Day 2: Visit La Boca and Recoleta Cemetery",
      "Day 3: Day trip to Tigre Delta",
    ],
    isTrending: true,
  },
  {
    name: "Edinburgh",
    image: "/assets/portrait/buildings/jahanzeb-ahsan-YYHcWSou3WM-unsplash.jpg",
    description:
      "The capital of Scotland, famous for its historic and cultural attractions, including the Edinburgh Castle and the annual Edinburgh Festival.",
    highlights: [
      "Explore Edinburgh Castle",
      "Walk the Royal Mile",
      "Hike up Arthur's Seat for panoramic views",
    ],
    itinerary: [
      "Day 1: Arrival and explore Old Town",
      "Day 2: Visit Edinburgh Castle and Holyrood Palace",
      "Day 3: Hike up Arthur's Seat and visit Calton Hill",
    ],
    isTrending: false,
  },
  {
    name: "Warsaw",
    image:
      "/assets/portrait/nature/johannes-andersson-UCd78vfC8vU-unsplash.jpg",
    description:
      "The capital of Poland, a city that beautifully blends modernity with historic charm, known for its resilient history and vibrant culture.",
    highlights: [
      "Explore the Old Town and Royal Castle",
      "Visit the Warsaw Uprising Museum",
      "Stroll through Łazienki Park",
    ],
    itinerary: [
      "Day 1: Arrival and explore Old Town",
      "Day 2: Visit Warsaw Uprising Museum and POLIN Museum",
      "Day 3: Relax at Łazienki Park and visit Wilanów Palace",
    ],
    isTrending: true,
  },
];

const getAllDestinations = () => {
  return where_to_next_destinations;
};

const getAllWhereToDestinations = () => {
  return where_to_next_destinations;
};

const getAllArticles = () => {
  return articles;
};

const getAllCountries = () => {
  return countries;
};

const getDestination = (destination: string) => {
  const destinationData = destinations.find((d) => d.name === destination);
  if (!destinationData) {
    // throw new Error("Destination not found");
    return destinations[0];
  }
  return destinationData;
};

const destinationService = {
  getAllWhereToDestinations,
  getAllArticles,
  getAllCountries,
  getDestination,
  getAllDestinations,
};

export default destinationService;
