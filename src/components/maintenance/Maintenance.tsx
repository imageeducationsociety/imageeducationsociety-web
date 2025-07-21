import { sanityFetch } from "@/sanity/lib/client";
import "./style.scss";
import { MAINTENANCE_QUERY } from "@/sanity/lib/queries";
import { MAINTENANCE_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

async function getMaintenanceData() {
  try {
    const maintenance = await sanityFetch({
      query: MAINTENANCE_QUERY,
      revalidate: 10,
    });
    return maintenance;
  } catch (error) {
    console.error("Error fetching maintenance data:", error);
    return null;
  }
}

const Maintenance = async () => {
  const maintenance: MAINTENANCE_QUERYResult | null =
    await getMaintenanceData();

  if (!maintenance) return null;

  return (
    <section id="Maintenance">
      <h2>{maintenance.title}</h2>
      <h3>{maintenance.subtitle}</h3>
      <div className="maintenance-description">
        {maintenance.description && (
          <PortableText value={maintenance.description} />
        )}
      </div>
    </section>
  );
};

export default Maintenance;
