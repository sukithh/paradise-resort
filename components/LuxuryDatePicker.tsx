"use client";

import { useEffect, useRef, useState } from "react";

type LuxuryDatePickerProps = {
  label: string;
  value: string;
  minDate: string;
  onChange: (date: string) => void;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(value: string) {
  if (!value) return "Select your date";

  return parseDate(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function LuxuryDatePicker({
  label,
  value,
  minDate,
  onChange,
}: LuxuryDatePickerProps) {
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const initial = value ? parseDate(value) : new Date();
    return new Date(initial.getFullYear(), initial.getMonth(), 1);
  });

  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells: (Date | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from(
      { length: daysInMonth },
      (_, index) => new Date(year, month, index + 1)
    ),
  ];

  while (calendarCells.length % 7 !== 0) {
    calendarCells.push(null);
  }

  const selectedDate = value ? parseDate(value) : null;
  const minimum = parseDate(minDate);
  const monthTitle = visibleMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function changeMonth(amount: number) {
    setVisibleMonth(
      new Date(year, month + amount, 1)
    );
  }

  function selectDate(date: Date) {
    const selected = dateKey(date);

    if (selected < minDate) return;

    onChange(selected);
    setOpen(false);
  }

  return (
    <div ref={pickerRef} className="relative min-w-0">
      <label className="mb-2 block text-sm font-medium text-gray-200">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex min-h-[58px] w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition duration-300 ${
          open
            ? "border-amber-400 ring-2 ring-amber-400/20"
            : "border-white/10 hover:border-amber-400/50"
        } bg-[#0b0b0a]`}
      >
        <span className={value ? "text-white" : "text-gray-500"}>
          {formatDate(value)}
        </span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="h-5 w-5 shrink-0 text-amber-400"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[100] mt-3 w-[min(340px,calc(100vw-3rem))] max-w-full rounded-2xl border border-amber-400/30 bg-[#11110f] p-4 shadow-2xl shadow-black/60 sm:w-[360px] sm:p-5">
          {/* Calendar heading */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-amber-400 transition hover:border-amber-400/50 hover:bg-amber-400/10"
            >
              ‹
            </button>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Choose a date
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                {monthTitle}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-amber-400 transition hover:border-amber-400/50 hover:bg-amber-400/10"
            >
              ›
            </button>
          </div>

          {/* Weekday headings */}
          <div className="mt-5 grid grid-cols-7 gap-1">
            {weekdays.map((day) => (
              <div
                key={day}
                className="py-2 text-center text-xs font-medium text-gray-500"
              >
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {calendarCells.map((date, index) => {
              if (!date) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square"
                  />
                );
              }

              const key = dateKey(date);
              const disabled = key < minDate;
              const isSelected = key === value;
              const isToday = key === dateKey(new Date());

              return (
                <button
                  key={key}
                  type="button"
                  disabled={disabled}
                  onClick={() => selectDate(date)}
                  aria-label={date.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  aria-pressed={isSelected}
                  className={`relative flex aspect-square min-w-0 items-center justify-center rounded-xl text-sm font-medium transition duration-200 sm:text-base ${
                    isSelected
                      ? "bg-amber-400 text-black shadow-lg shadow-amber-950/30"
                      : disabled
                        ? "cursor-not-allowed text-gray-700"
                        : "text-gray-200 hover:bg-amber-400/15 hover:text-amber-300"
                  }`}
                >
                  {date.getDate()}

                  {isToday && !isSelected && !disabled && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Calendar footer */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="min-w-0">
              <p className="text-xs text-gray-500">Selected date</p>
              <p className="mt-1 truncate text-sm font-medium text-white">
                {selectedDate
                  ? formatDate(value)
                  : "No date selected"}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const now = new Date();
                setVisibleMonth(
                  new Date(now.getFullYear(), now.getMonth(), 1)
                );
              }}
              disabled={
                dateKey(new Date()) < minDate
              }
              className="rounded-full px-3 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-400/10 disabled:opacity-40"
            >
              This month
            </button>
          </div>
        </div>
      )}
    </div>
  );
}