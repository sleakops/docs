import React from "react";
import clsx from "clsx";
import socialLinks from "@site/src/data/socialLinks";
import styles from "./styles.module.css";

function SocialLinks() {
  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`Visit our ${social.name} page`}
            title={social.name}
          >
            <IconComponent className={styles.socialIcon} />
          </a>
        );
      })}
    </div>
  );
}

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className={styles.footerBottom}>
            <div className={styles.footerLeft}>
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
            <SocialLinks />
          </div>
        )}
      </div>
    </footer>
  );
}
