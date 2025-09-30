"use client";

import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import { json } from "stream/consumers";

export const MenuContainer = () => {
  return (
    <div className="px-22 pb-12 flex flex-col gap-[54px]">
      <div className="text-white text-[30px] font-semibold"></div>
      <div className="flex flex-wrap gap-9">
        <Card />
      </div>
    </div>
  );
};
