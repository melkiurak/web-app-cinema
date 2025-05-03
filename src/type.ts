export interface AuthProps{
    setAuthModal: (isOpen: boolean) => void;
}
export interface Movie {
    id: string;
    url: string;
    primaryTitle: string;
    originalTitle: string;
    type: string;
    description: string;
    primaryImage: string;
    trailer: string;
    contentRating: string;
    startYear: number;
    endYear: number | null;
    releaseDate: string;
    interests: string[];
    countriesOfOrigin: string[];
    externalLinks: null;
    spokenLanguages: string[];
    filmingLocations: string[];
    productionCompanies: {
      id: string;
      name: string;
    }[];
    budget: number;
    grossWorldwide: number;
    genres: string[];
    isAdult: boolean;
    runtimeMinutes: number;
    averageRating: number;
    numVotes: number;
    metascore: number;
  }
  