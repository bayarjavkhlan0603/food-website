import { DialogTitle } from "@radix-ui/react-dialog";
import { Minus, Plus } from "lucide-react";

export const FoodDetail = ({
  foodImage,
  foodName,
  foodIngredients,
  foodPrice,
}: {
  foodImage: string;
  foodName: string;
  foodIngredients: string;
  foodPrice: string;
}) => {
  return (
    <div className="p-6 flex gap-6 bg-white rounded-[20px] w-[824px] h-[412px]">
      <div>
        <img
          className="w-[377px] h-[364px] object-cover rounded-xl"
          src={foodImage}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <DialogTitle className="text-[30px] font-semibold text-[#EF4444]">
            {foodName}
          </DialogTitle>
          <p className="text-[16px]">{foodIngredients}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div>
              <p className="text-[16px]">Total price</p>
              <p className="text-[24px] font-semibold">${foodPrice}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="border rounded-[9999px] p-3">
                <Minus className="w-4 h-4" />
              </button>
              <p className="text-[18px] font-semibold">1</p>
              <button className="border rounded-[9999px] p-3">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button className="w-full bg-black text-white py-4 px-8 rounded-[9999px] text-[14px] font-medium">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
