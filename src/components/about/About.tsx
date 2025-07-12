import { client } from "@/sanity/lib/client";
import "./style.scss";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { ABOUT_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import OptImage from "../commmon/OptImage";

const About = async () => {
  const about = await client.fetch<ABOUT_QUERYResult>(ABOUT_QUERY);
  if (!about) return null;

  return (
    <section id="About">
      <div className="about-container">
        <div className="about-content">
          <h2>{about.title}</h2>
          <h1>{about.subtitle}</h1>
        </div>

        <div className="about-description">
          {about.description && <PortableText value={about.description} />}
        </div>

        <div className="about-matrix">
          {about.matrix &&
            about.matrix.map((item) => (
              <div className="about_matrix_item" key={item._key}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="about-image">
        {about.image && about.title && (
          <OptImage image={about.image} alt={about.title} mode="contain" />
        )}
      </div>
    </section>
  );
};

export default About;
