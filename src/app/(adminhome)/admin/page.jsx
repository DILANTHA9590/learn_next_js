"use client";
import React, { useEffect, useState } from "react";
import "../../globals.css";

export default function AdminDashboard() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {}, []);

  const handleIdChange = (newId) => {
    setSelectedId(newId);
    console.log("Selected ID:", newId);
  };

  return (
    <div className="h-full bg-[var(--color-bg)] text-[var(--color-primary)] p-6 rounded-m [font-family:var(--font-open-sans)]">
      Admin Dashboard page
      <div className="relative flex items-center justify-center w-full h-48">
        {/* First box */}
        <div
          className={`${
            selectedId === "1" ? "z-50 bg-amber-700" : "z-10"
          } w-32 h-48 bg-white border-2 border-black cursor-pointer -rotate-12`}
          id="1"
          onClick={(e) => {
            const getId = e.target.id;
            handleIdChange(getId);
          }}
        >
          1
        </div>

        {/* Second box */}
        <div
          className={`${
            selectedId === "2" ? "z-50" : "z-20"
          } w-32 h-48 -ml-16 bg-white border-2 border-black cursor-pointer`}
          id="2"
          onClick={(e) => {
            const getId = e.target.id;
            handleIdChange(getId);
          }}
        >
          2
        </div>

        {/* Third box */}
        <div
          className={`${
            selectedId === "3" ? "z-50" : "z-30"
          } w-32 h-48 -ml-16 bg-white border-2 border-black cursor-pointer rotate-6 mt-5`}
          id="3"
          onClick={(e) => {
            const getId = e.target.id;
            handleIdChange(getId);
          }}
        >
          3
        </div>

        {/* Fourth box */}
        <div
          className={`${
            selectedId === "4" ? "z-50" : "z-40"
          } w-32 h-48 -ml-16 bg-white border-2 border-black cursor-pointer rotate-12 mt-12`}
          id="4"
          onClick={(e) => {
            const getId = e.target.id;
            handleIdChange(getId);
          }}
        >
          4
        </div>
      </div>
    </div>
  );
}
