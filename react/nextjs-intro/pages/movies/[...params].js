import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div className="container">
      {/* <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /> */}
      <div className="movieInfo">
        <h4>{title}</h4>
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }
        .movieInfo {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

// params: { params: ['title', 'id']}
export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const { title, overview, poster_path } = await (
//     await fetch(`http://localhost:3000/api/movies/${id}`)
//   ).json();

//   return {
//     props: {
//       title,
//       overview,
//       poster_path,
//     },
//   };
// }
