import { sanityFetch } from "@/sanity/lib/client";
import "./style.scss";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { ABOUT_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import OptImage from "../commmon/OptImage";

async function getAboutData() {
  try {
    const about = await sanityFetch({
      query: ABOUT_QUERY,
      revalidate: 10,
    });
    return about;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

const About = async () => {
  const about: ABOUT_QUERYResult | null = await getAboutData();
  if (!about)
    return (
      <section id="About">
        <div className="about-container">
          <div className="about-content"></div>
          <div className="about-description"></div>
          <div className="about-matrix"></div>
        </div>
        <div className="about-image"></div>
      </section>
    );

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
