
export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  content: string;
  source: string;
  responded: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Emma Thompson',
    avatar: 'ET',
    date: '2 days ago',
    rating: 5,
    content: 'Absolutely wonderful service! The staff was attentive and professional. I\'ll definitely be coming back and recommending to friends.',
    source: 'Google',
    responded: true,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    avatar: 'MR',
    date: '1 week ago',
    rating: 4,
    content: 'Great experience overall. The only reason for 4 stars instead of 5 is the wait time was a bit longer than expected.',
    source: 'Yelp',
    responded: false,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    date: '2 weeks ago',
    rating: 5,
    content: 'Top-notch service and amazing results. Worth every penny!',
    source: 'Google',
    responded: true,
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: 'JW',
    date: '3 weeks ago',
    rating: 3,
    content: 'Service was okay, but I expected more for the price. The staff was friendly but the results were only satisfactory.',
    source: 'Facebook',
    responded: false,
  },
  {
    id: 5,
    name: 'Lisa Chen',
    avatar: 'LC',
    date: '1 month ago',
    rating: 5,
    content: "Best in town! I've tried several competitors and nobody comes close to the quality and service provided here.",
    source: 'Google',
    responded: true,
  },
  {
    id: 6,
    name: 'David Brown',
    avatar: 'DB',
    date: '1 month ago',
    rating: 2,
    content: 'Disappointed with the service. The staff seemed distracted and the quality was below what I expected based on the reviews.',
    source: 'Yelp',
    responded: false,
  },
];
