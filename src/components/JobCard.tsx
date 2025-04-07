import React from "react";
import Image from "next/image";
import Link from "next/link";

type JobCardProps = {
  title: string;
  company: string;
  description: string;
  imageSrc: string;
  route: string;
  bgColor?: string;
  buttonBgColor: string;
};

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  description,
  imageSrc,
  route,
  bgColor = "bg-white",
  buttonBgColor
}) => {
  return (
    <div className={`w-[600px] h-[300px] ${bgColor} rounded-3xl p-4`}>
      <div className="flex flex-row h-full">
        <div className="w-[400px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-gray-600">{title}</h2>
            <h1 className="font-bold text-3xl">{company}</h1>
            <p className="mt-2">{description}</p>
          </div>
          <Link href={route}>
            <button className={`${buttonBgColor} font-bold px-4 py-2 mt-4 rounded-xl hover:scale-105 transition`}>
              Learn Why
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full">
          <Image
            src={imageSrc}
            alt={company}
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
