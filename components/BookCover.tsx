import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSVG from "@/components/BookCoverSVG";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  variant?: BookCoverVariant;
  className?: string;
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({
  variant = "regular",
  className,
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSVG coverColor={coverColor} />

      <div
        className={"absolute z-10"}
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverUrl}
          alt={"Book Cover"}
          fill
          className={"rounded-sm object-fill"}
        />
      </div>
    </div>
  );
};

export default BookCover;
