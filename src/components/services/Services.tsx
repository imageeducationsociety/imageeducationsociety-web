import { SERVICES_QUERY } from "@/sanity/lib/queries";
import "./style.scss";
import { sanityFetch } from "@/sanity/lib/client";
import { SERVICES_QUERYResult } from "@/sanity/types";
import { Icon } from "@iconify/react";

async function getServicesData() {
  try {
    const services = await sanityFetch({
      query: SERVICES_QUERY,
      revalidate: 10,
    });
    return services;
  } catch (error) {
    console.error("Error fetching services data:", error);
    return null;
  }
}

const Services = async () => {
  const services: SERVICES_QUERYResult | null = await getServicesData();

  if (!services)
    return (
      <section id="Services">
        <div className="services-container"></div>
      </section>
    );
  return (
    <section id="Services">
      <h2>{services.title}</h2>
      <div className="services_content">
        {services.services &&
          services.services.map((service, index) => (
            <div className="services_content_item" key={service.title}>
              <span>{(index + 1).toString().padStart(2, "0")}.</span>
              <div className="services_content_item_content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              {service.icon && service.icon.name && (
                <Icon icon={service.icon.name} />
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
