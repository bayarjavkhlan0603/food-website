"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Plus } from "lucide-react";

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

export default function MenuCarouselContainer() {
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [selectedItem, setSelectedItem] = useState<any>(null);
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

  const handleAddClick = (item: any) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-700">
      {/* Categories Header */}
      <div className="sticky top-0 z-10 bg-gray-700 border-b border-gray-600">
        <div className="px-6 py-4">
          <h2 className="text-white text-lg font-medium mb-4">Categories</h2>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => scrollToSection(category)}
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

      {/* Menu Sections */}
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
                <Card
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-32 object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-red-500 font-medium text-sm">
                        {item.name}
                      </h4>
                      <span className="text-gray-900 font-semibold text-sm">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <Button
                      onClick={() => handleAddClick(item)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Dialog for showing food details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-500">
              {selectedItem?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  {selectedItem.price}
                </span>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {selectedItem.description}
              </p>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
