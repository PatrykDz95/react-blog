import Head from "next/head";
//import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('Look at my styles.', {
          style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
          },
          iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
          },
      })}>Toast Me</button>
    </div>
  );
}
