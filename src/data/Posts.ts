// src/data/posts.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

export const blogPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with React",
    content: "React is a JavaScript library for building user interfaces...",
    author: "Alice",
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    content:
      "Hooks allow you to use state and other React features without writing a class...",
    author: "Bob",
  },
  {
    id: "3",
    title: "Mastering Component Lifecycle",
    content:
      "Learn about mounting, updating, and unmounting phases of components...",
    author: "Charlie",
  },
  {
    id: "4",
    title: "Why use TypeScript with React?",
    content:
      "TypeScript adds static type definitions to JavaScript, enhancing code quality...",
    author: "Alice",
  },
];
