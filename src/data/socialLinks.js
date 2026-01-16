/**
 * Social Media Links Configuration
 *
 * Add or remove social media links by modifying this array.
 * Each entry requires:
 *  - name: Display name (used for aria-label accessibility)
 *  - url: Full URL to the social media profile
 *  - icon: The icon component name from react-icons/si (Simple Icons)
 *
 * Available Simple Icons for social media:
 *  - SiInstagram, SiLinkedin, SiTwitter, SiX (Twitter/X)
 *  - SiFacebook, SiYoutube, SiGithub, SiDiscord
 *  - SiTiktok, SiSlack, SiMedium, SiReddit
 *
 * To add a new social link:
 * 1. Import the icon from 'react-icons/si'
 * 2. Add a new object to the socialLinks array
 *
 * Example:
 * {
 *   name: 'YouTube',
 *   url: 'https://youtube.com/@sleakops',
 *   icon: SiYoutube,
 * }
 */

import { SiInstagram, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/sleakops/",
    icon: SiInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/sleakops/",
    icon: SiLinkedin,
  },
  // Add more social links here following the same pattern
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/sleakops',
  //   icon: SiTwitter,
  // },
  // {
  //   name: 'GitHub',
  //   url: 'https://github.com/sleakops',
  //   icon: SiGithub,
  // },
  // {
  //   name: 'YouTube',
  //   url: 'https://youtube.com/@sleakops',
  //   icon: SiYoutube,
  // },
];

export default socialLinks;
