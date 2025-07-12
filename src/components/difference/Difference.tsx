import "./style.scss";
import { client } from "@/sanity/lib/client";
import { DIFFERENCE_QUERY } from "@/sanity/lib/queries";
import { DIFFERENCE_QUERYResult } from "@/sanity/types";
import OptImage from "../commmon/OptImage";

const Difference = async () => {
  const difference =
    await client.fetch<DIFFERENCE_QUERYResult>(DIFFERENCE_QUERY);
  if (!difference) return null;

  return (
    <section id="Difference">
      <div className="difference-container">
        <div className="title_container">
          <h1>{difference.title}</h1>
          <h2>{difference.subtitle}</h2>
        </div>
        <div className="difference_points">
          {difference.points &&
            difference.points.map((point) => (
              <div className="point" key={point.title}>
                {point.icon && point.title && (
                  <OptImage
                    image={point.icon}
                    alt={point.title}
                    mode="contain"
                    sizes="card"
                  />
                )}
                <div className="title_container">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
