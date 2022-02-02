import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import { getPosts } from "../utils";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <CreatePost />
        <Feed />
      </main>
      <style jsx>
        {`
          main {
            padding-top: 70px;
          }
        `}
      </style>
    </div>
  );
}
