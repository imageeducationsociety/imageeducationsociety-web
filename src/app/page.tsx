import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.maintenanceContent}>
          <div className={styles.logoSection}>
            <h1 className={styles.title}>Image Education Society</h1>
            <p className={styles.subtitle}>
              Empowering Women Through Skills Since 2008
            </p>
          </div>

          <div className={styles.maintenanceMessage}>
            <div className={styles.maintenanceIcon}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className={styles.maintenanceTitle}>
              Website Under Maintenance
            </h2>
            <p className={styles.maintenanceText}>
              We're currently updating our website to better serve our community
              and showcase our mission of empowering women through skill-based
              training and livelihood generation.
            </p>

            <div className={styles.expectedTime}>
              <p>Expected completion: Soon</p>
            </div>
          </div>

          <div className={styles.missionSection}>
            <h3>Our Mission</h3>
            <p>
              To empower underprivileged women through various skills, enabling
              them to become financially independent and socially confident.
            </p>
          </div>

          <div className={styles.contactSection}>
            <h3>Contact Us</h3>
            <p>For immediate assistance or inquiries about our programs:</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email:</strong> imageeducationsociety.org@gmail.com
              </p>
            </div>
          </div>

          <div className={styles.programsSection}>
            <h3>Our Core Programs</h3>
            <ul className={styles.programsList}>
              <li>Tailoring & Apparel Manufacturing</li>
              <li>Beauty & Wellness Sector</li>
              <li>Hospitality & Tourism</li>
              <li>Digital Literacy</li>
              <li>Sustainable Product Development</li>
              <li>Market Linkage & Employment Facilitation</li>
              <li>Child Education Support</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Image Education Society. All rights reserved.</p>
        <p>
          Founded by Simran Kaur Munde - Textile Engineer with 25+ years of
          experience
        </p>
      </footer>
    </div>
  );
}
