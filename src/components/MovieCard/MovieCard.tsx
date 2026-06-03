import { Movie } from "@/types/types";
import Image from "next/image";

type MovieCardProps = Pick<Movie, "title" | "poster_path">;

export default function MovieCard({ title, poster_path }: MovieCardProps) {
  return (
    <article className="flex flex-col h-64 w-64 border border-amber-50 rounded-xl">
      {poster_path && (
        <Image
          src={`http://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          height={500}
          width={500}
          loading="lazy"
          className="object-contain overflow-hidden"
        />
      )}
      <h3 className="text-center">{title}</h3>
    </article>
  );
}
