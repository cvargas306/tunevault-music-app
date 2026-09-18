# Overview

As a software developer, I'm working to strengthen my understanding of statically-typed languages and how they help catch errors early and make code more maintainable. TypeScript is especially relevant to me because it builds directly on JavaScript, the language I already use for frontend web development, while adding a type system that improves code quality and developer confidence.

To practice this, I built **TuneVault**, a console-based application written in TypeScript for managing songs and playlists. TuneVault models songs with metadata (artist, album, genre), supports playlists that can contain nested sub-playlists, calculates total playback duration recursively, and simulates fetching metadata from a remote source asynchronously.

My purpose in writing this software was to apply TypeScript's core language features in a project connected to my own background in music, while learning how classes, type annotations, recursion, async/await, and custom exceptions work together in a real program.

[Software Demo Video](https://www.loom.com/share/9e8ff0f755e14d7681c3bc693a8996bf)

# Development Environment

I developed TuneVault using **Visual Studio Code** on macOS, with the integrated terminal for running commands and Git for version control. The project was initialized with `npm` and uses `tsx` to run TypeScript files directly during development, and the TypeScript compiler (`tsc`) to transpile to JavaScript when needed.

I used **TypeScript** (version managed via npm) as the programming language, along with the following packages:
- `typescript` — the TypeScript compiler
- `tsx` — to execute `.ts` files directly without a separate build step
- `@types/node` — type definitions for Node.js APIs

No external frameworks or UI libraries were used; this is a pure console application built on Node.js.

# Useful Websites

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [W3Schools - TypeScript Intro](https://www.w3schools.com/typescript/typescript_intro.php)
- [Tutorial de TypeScript en Español (YouTube)](https://www.youtube.com/watch?v=g8yxh3mynBs&list=PLSYRch2IsRx2600akPXhfOTm7AFrffHt9)

# Future Work

- Add unit tests (e.g., with Jest) to validate Song and Playlist behavior automatically.
- Allow saving and loading playlists from a JSON file instead of only in-memory data.
- Add a search feature to find songs by artist or title across all playlists.
- Replace the simulated metadata service with a real public music API.