"use client";

import { Button } from "@/components/ui/button";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

export function CategoryNav({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryNavProps) {
  return (
    <div className="sticky top-[72px] z-10 bg-gray-700 border-b border-gray-600">
      <div className="px-6 py-4">
        <h2 className="text-white text-lg font-medium mb-4">Categories</h2>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryClick(category)}
              variant={activeCategory === category ? "default" : "secondary"}
              className={`whitespace-nowrap text-sm px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-gray-600 hover:bg-gray-500 text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
