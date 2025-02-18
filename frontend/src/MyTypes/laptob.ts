import { JSX } from "react";

export default interface Laptop {
    map(arg0: (laptop: { brand: string; model: string; name: string; price: number; image: string; image2: string; _id: React.Key | null | undefined; }) => JSX.Element): import("react").ReactNode;
    _id: string | React.Key;
    name: string;
    brand: string;
    model: string;
    price: number;
    processor?: string;
    description?: string;
    category?: string;
    image: string;
    image2: string;
    usageType?: string;
  }