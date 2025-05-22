"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

export function RecipeCard({ id, title, category, image, description }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/recipes/${id}`)}
      className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.03] hover:shadow-xl bg-[#fff1e6] border border-[#f0dacd]"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-[#772f1a]">{title}</h2>
        <p className="text-sm font-medium text-[#a15339]">{category}</p>
        <p className="text-sm text-[#5e4035] line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
