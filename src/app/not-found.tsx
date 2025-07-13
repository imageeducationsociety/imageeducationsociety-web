import Link from "next/link";
import "./(client)/scss/globals.scss";
import "./notFound.scss";

const notFoundData = {
  errorCode: "404",
  title: "Page Not Found",
  message: "LET'S GET YOU BACK TO THE GOOD STUFF",
  buttonText: "Return Home",
  buttonLink: "/",
};

export default function NotFound() {
  return (
    <main>
      <section id="NotFound">
        <h1>{notFoundData.errorCode}</h1>
        <div className="bottom_container">
          <h2>{notFoundData.title}</h2>
          <p>{notFoundData.message}</p>
          <Link href={notFoundData.buttonLink} scroll={false}>
            {notFoundData.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
