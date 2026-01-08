/**
 * Tutorials Configuration and Data
 *
 * This file contains both tag definitions and tutorial metadata.
 * When you create a new tutorial MDX file, add its metadata here to show it in the showcase.
 *
 * To add a new tag:
 * 1. Add the tag key to the TagList array
 * 2. Add the tag configuration to the Tags object
 *
 * To add a new tutorial:
 * 1. Create the MDX file in /tutorials/
 * 2. Add an entry to the tutorialsList array with matching id
 */

// Available tags - Add new tags here
export const TagList = ["featured", "nextjs", "node", "php", "database"];

// Tag configurations with labels, descriptions, and colors
export const Tags = {
  featured: {
    label: "⭐ Featured",
    description: "Our recommended tutorials for getting started",
    color: "#f59e0b",
  },
  nextjs: {
    label: "Next.js",
    description: "Tutorials related to Next.js framework",
    color: "#000000",
  },
  node: {
    label: "Node.js",
    description: "Tutorials related to Node.js runtime",
    color: "#339933",
  },
  php: {
    label: "PHP",
    description: "Tutorials related to PHP development",
    color: "#777BB4",
  },
  database: {
    label: "Database",
    description:
      "Tutorials related to databases (MySQL, PostgreSQL, MongoDB, etc.)",
    color: "#336791",
  },
};

// Tutorial entries - Add new tutorials here
// The 'id' should match the MDX filename (without extension)
export const tutorialsList = [
  {
    id: "nextjs-deploy",
    title: "Deploy a Next.js App",
    description:
      "Learn how to deploy your Next.js application to SleakOps with automatic CI/CD pipelines.",
    tags: ["featured", "nextjs"],
    image: "/img/tutorials/nextjs-deploy.png",
  },
  {
    id: "node-api",
    title: "Node.js API with Express",
    description:
      "Build and deploy a RESTful API using Node.js and Express framework.",
    tags: ["node"],
    image: "/img/tutorials/node-api.png",
  },
  {
    id: "php-laravel",
    title: "PHP Laravel Deployment",
    description:
      "Complete guide for deploying Laravel applications with database migrations.",
    tags: ["php", "database"],
    image: "/img/tutorials/php-laravel.png",
  },
  {
    id: "database-backup",
    title: "Database Backup Strategies",
    description:
      "Learn best practices for backing up your databases in production environments.",
    tags: ["featured", "database"],
    image: "/img/tutorials/database-backup.png",
  },
];

// Helper function to get the tutorial link
export function getTutorialLink(id) {
  return `/tutorial/${id}`;
}
