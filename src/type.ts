export interface AuthProps{
  setAuthModal: (isOpen: boolean) => void;
}
export interface Movie {
  id: string;
  name: string;
  name_en: string;
  description: string;
  slogan: string;
  year: number;
  date: string;
  ukrainePremiere: string;
  worldPremiere: string;
  upcoming: boolean;
  status: string;

  poster: string;
  background: string;

  duration: number;
  ageRating: string;

  genres: string[];
  actors: string[];
  productionCompanies: string[];
  visualEffects: string[];

  director: string;
  screenwriter: string;
  cinematographer: string;
  editor: string;
  composer: string;
  producer: string;
  productionDesigner: string;
  dubbingStudio: string;

  rating: number;
  ratingIMDb: number;
  ratingKinoarea: number;
  expectationRating: number;

  country: string;
  worldBoxOffice: number;

  comments: {
    positive: number;
    neutral: number;
    negative: number;
    total: number;
  };
}