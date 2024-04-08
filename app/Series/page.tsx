"use client"
import { entries } from "@/app/public/sample.json"
import Image from "next/image"
import { useEffect, useState } from "react"
import Title from "../components/Title";
interface Series {
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
const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const filteredData = entries.filter((item: any) => item.programType === "series" && item.releaseYear >= 2010);
    const sortedData = filteredData.sort((a: any, b: any) => a.title.localeCompare(b.title));
    setSeriesData(sortedData.slice(0, 21));
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Title title="Series" />
      {isLoading ? (
        <h1 className="text-2xl">Loading.......</h1>
      ) : (
        <div className='cards'>
          <ul className='flex flex-wrap justify-between p-12'>
            {seriesData.map((item: Series, index: number) => (
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

export default Series