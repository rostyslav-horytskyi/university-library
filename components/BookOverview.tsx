import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
}: Omit<Book, "createdAt">) => {
  return (
    <section className={"book-overview"}>
      <div className={"flex flex-1 flex-col gap-5"}>
        <h1>{title}</h1>

        <div className={"book-info"}>
          <p>
            By <span className={"text-light-200 font-semibold"}>{author}</span>
          </p>
          <p>
            Category{" "}
            <span className={"text-light-200 font-semibold"}>{genre}</span>
          </p>

          <div className={"flex flex-row gap-1"}>
            <Image
              src={"/icons/star.svg"}
              alt={"star"}
              width={22}
              height={22}
            />
            <p>{rating}</p>
          </div>
        </div>

        <div className={"books-copies"}>
          <p>
            Total Books: <span>{totalCopies}</span>
          </p>

          <p>
            Available Books: <span>{availableCopies}</span>
          </p>
        </div>

        <p className={"book-description"}>{description}</p>

        <Button className={"book-overview_btn"}>
          <Image src={"/icons/book.svg"} alt={"book"} width={20} height={20} />
          <p className={"font-bebas-neue text-dark-100 text-xl"}>
            Borrow Book Request
          </p>
        </Button>
      </div>

      <div className={"relative flex flex-1 justify-center"}>
        <div className={"relative"}>
          <BookCover
            variant={"wide"}
            className={"z-10"}
            coverColor={coverColor}
            coverUrl={coverUrl}
          />

          <div
            className={
              "absolute top-10 left-16 rotate-12 opacity-40 max-sm:hidden"
            }
          >
            <BookCover
              variant={"wide"}
              coverColor={coverColor}
              coverUrl={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookOverview;
