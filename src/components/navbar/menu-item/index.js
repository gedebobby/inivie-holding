"use client";
import { useState } from "react";

export default function MenuItem({ item, level = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={`${level === 0 ? "border-b border-white/10 py-3" : "py-1"}`}>
      {/* Parent */}
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`w-full flex justify-between items-center font-manrope
          ${level === 0 ? "text-2xl" : "text-lg opacity-80"}
        `}
      >
        {item.label}

        {hasChildren && (
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        )}
      </button>

      {/* Children */}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[1000px] mt-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col pl-4 border-l border-white/10">
            {item.children.map((child, i) => (
              <MenuItem key={i} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
