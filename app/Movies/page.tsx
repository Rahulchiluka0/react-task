"use client"
import { entries } from "@/app/public/sample.json"
import Image from "next/image"
import { useEffect, useState } from "react"
import Title from "../components/Title";
interface Movie {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}
const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const filteredData = entries.filter((item: any) => item.programType === "movie" && item.releaseYear >= 2010);
    const sortedData = filteredData.sort((a: any, b: any) => a.title.localeCompare(b.title));
    setMovieData(sortedData.slice(0, 21));
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (<>
    <Title title="Movies" />
    {isLoading ? (
      <h1 className="text-2xl">Loading.......</h1>
    ) : (
      <div className='cards'>
        <ul className='flex flex-wrap justify-between p-12 '>
          {movieData.map((item: Movie, index: number) => (
            <li key={item.title} className="w-1/6 mb-8 list-none">
              <div className="h-60">
                <Image src={item.images["Poster Art"].url} alt="No Pic" width={150} height={150} />
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>)}
  </>

  )
}

export default Movies