import { Package, Settings, Menu, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className="text-white">
      <div className="p-6">
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Food menu
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-start bg-gray-800 text-white hover:bg-gray-700"
          >
            <Package className="w-5 h-5 mr-3" />
            Orders
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Button>
        </nav>
      </div>
    </div>
  );
}
