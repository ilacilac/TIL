import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     console.log(results);
  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      `/movies/${title}/${id}`
      // // URL 설정 + 정보
      // // http://localhost:3000/movies/76600?title=%EC%9D%91%EC%95%A0
      // {
      //   pathname: `/movies/${title}/${id}`,
      //   query: {
      //     title,
      //   },
      // },
      // // MASKING
      // // http://localhost:3000/movies/76600
      // `/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              href={
                `/movies/${movie.title}/${movie.id}`
                // ({
                //   pathname: `/movies/${movie.id}`,
                //   query: {
                //     title: movie.title,
                //   },
                // },
                // `/movies/${movie.id}`)
              }
            >
              {movie.title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`, {
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  return {
    props: {
      results,
    },
  };
}
