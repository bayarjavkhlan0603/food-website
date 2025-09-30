"use client";

import { useState, useRef } from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CategoryNav } from "./CategoryNavbar";
import { FoodItemDialog } from "./FoodItemDialog";
import { FoodCard } from "./FoodCard";

const categories = [
  "Appetizers",
  "Soups",
  "Pizza",
  "Sandwiches",
  "Hot Sides",
  "Hot Sub Subs",
  "Salads",
  "Drinks",
  "Desserts",
];

const menuItems = {
  Appetizers: [
    {
      id: 1,
      name: "Finger food",
      price: "$5.99",
      description: "Crispy finger foods perfect for sharing",
      image: "/finger-food-appetizers.jpg",
    },
    {
      id: 2,
      name: "Beef Carpaccio Appetizer",
      price: "$9.99",
      description: "Thinly sliced beef with capers and parmesan",
      image: "/beef-carpaccio.png",
    },
    {
      id: 3,
      name: "Sunshine Stackers",
      price: "$12.99",
      description: "Layered appetizer with fresh ingredients",
      image: "/sunshine-stackers-appetizer.jpg",
    },
    {
      id: 4,
      name: "Beef Carpaccio Appetizer",
      price: "$9.99",
      description: "Thinly sliced beef with capers and parmesan",
      image: "/beef-carpaccio-plate.jpg",
    },
    {
      id: 5,
      name: "Sunshine Stackers",
      price: "$12.99",
      description: "Layered appetizer with fresh ingredients",
      image: "/sunshine-stackers-dish.jpg",
    },
    {
      id: 6,
      name: "Grilled Chicken",
      price: "$9.99",
      description: "Perfectly grilled chicken breast",
      image: "/grilled-chicken-appetizer.jpg",
    },
  ],
  Salads: [
    {
      id: 7,
      name: "Grilled Chicken salad salad",
      price: "$7.99",
      description: "Fresh greens with grilled chicken",
      image: "/grilled-chicken-salad.png",
    },
    {
      id: 8,
      name: "Burrata Caprese",
      price: "$21.99",
      description: "Fresh burrata with tomatoes and basil",
      image: "/burrata-caprese-salad.jpg",
    },
    {
      id: 9,
      name: "Beetroot and orange salad",
      price: "$3.99",
      description: "Refreshing beetroot and orange combination",
      image: "/beetroot-orange-salad.jpg",
    },
  ],
  "Lunch Favorites": [
    {
      id: 10,
      name: "Sunshine Stackers",
      price: "$12.99",
      description: "Our signature stacked lunch special",
      image: "/sunshine-stackers-lunch.jpg",
    },
    {
      id: 11,
      name: "Sunshine Stackers",
      price: "$15.99",
      description: "Premium version with extra toppings",
      image: "/premium-sunshine-stackers.jpg",
    },
    {
      id: 12,
      name: "Sunshine Stackers",
      price: "$12.99",
      description: "Classic preparation with fresh ingredients",
      image: "/classic-sunshine-stackers.jpg",
    },
    {
      id: 13,
      name: "Sunshine Stackers",
      price: "$12.99",
      description: "Healthy option with extra vegetables",
      image: "/healthy-sunshine-stackers.jpg",
    },
    {
      id: 14,
      name: "Sunshine Stackers",
      price: "$13.99",
      description: "Spicy variant with jalapeños",
      image: "/spicy-sunshine-stackers.jpg",
    },
  ],
};

interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export function Homepage() {
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    const element = sectionRefs.current[category];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleAddClick = (item: FoodItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-700">
      <Header />
      <HeroSection />
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToSection}
      />

      <div className="px-6 py-6">
        {Object.entries(menuItems).map(([category, items]) => (
          <section
            key={category}
            ref={(el) => {
              sectionRefs.current[category] = el;
            }}
            className="mb-12"
          >
            <h3 className="text-white text-xl font-medium mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddClick={handleAddClick}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <FoodItemDialog
        item={selectedItem}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
