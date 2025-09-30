"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";

interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FoodItemDialogProps {
  item: FoodItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FoodItemDialog({
  item,
  open,
  onOpenChange,
}: FoodItemDialogProps) {
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-500">{item.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              {item.price}
            </span>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
