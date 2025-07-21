import { sanityFetch } from "@/sanity/lib/client";
import "./style.scss";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { CONTACT_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Form from "./form/Form";

async function getContactData() {
  try {
    const contact = await sanityFetch({
      query: CONTACT_QUERY,
      revalidate: 10,
    });
    return contact;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return null;
  }
}

const Contact = async () => {
  const contact: CONTACT_QUERYResult | null = await getContactData();

  if (!contact)
    return (
      <section id="Contact">
        <h2></h2>
        <div className="contact-container"></div>
      </section>
    );

  return (
    <section id="Contact">
      <div className="contact-container">
        <div className="title_container">
          <div className="title_main">
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
          </div>
          <div className="title_secondary">
            <p>
              <MapPin />
              {contact.address}
            </p>
            <Link href={`tel:${contact.phone}`}>
              <Phone /> {contact.phone}
            </Link>
            <Link href={`mailto:${contact.email}`}>
              <Mail />
              {contact.email}
            </Link>
            <p className="office_hours">
              <strong>Office Hours:</strong> <span>{contact.office_hours}</span>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
