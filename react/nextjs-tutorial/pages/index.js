import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  return (
    <div>
      <Head>
        <title>HOME | ilacilac</title>
      </Head>
    </div>
  );
}
