export interface Place {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
  imageUrl: string;
  interestingFact?: string;
  funFact?: string;
}
