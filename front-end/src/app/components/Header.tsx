"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, User, MapPin, Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();

  const subtotal = getTotalPrice();
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    <header className="sticky top-0 z-20 bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Nom<span className="text-red-500">Nom</span>
          </h1>
          <p className="text-sm text-gray-300">Swift delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Add Location
          </Button>
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800 rounded-full relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[400px] sm:w-[500px] flex flex-col"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Order detail
                </SheetTitle>
              </SheetHeader>
              <Tabs
                defaultValue="cart"
                className="mt-6 px-6 pb-6 flex flex-col flex-1 overflow-hidden"
              >
                <TabsList className="grid w-full grid-cols-2 flex-shrink-0">
                  <TabsTrigger
                    value="cart"
                    className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                  >
                    Cart
                  </TabsTrigger>
                  <TabsTrigger value="order">Order</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="cart"
                  className="flex-1 flex flex-col overflow-hidden mt-0"
                >
                  <h3 className="font-semibold text-lg mt-4 mb-4 flex-shrink-0">
                    My cart
                  </h3>
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-3 border-b pb-4"
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold text-red-500">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2 border rounded-full px-2 py-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <span className="font-semibold">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex-shrink-0 space-y-4 pt-4">
                        <Button
                          variant="outline"
                          className="w-full border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
                        >
                          Add food
                        </Button>
                        <div className="border-t pt-4 space-y-2">
                          <h3 className="font-semibold text-lg">
                            Payment info
                          </h3>
                          <div className="flex justify-between text-sm">
                            <span>Items</span>
                            <span>${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Shipping</span>
                            <span>{shipping.toFixed(2)}$</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </TabsContent>
                <TabsContent value="order">
                  <p className="text-gray-500 text-center py-8">
                    No orders yet
                  </p>
                </TabsContent>
              </Tabs>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-red-500 hover:bg-red-600 rounded-full"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
