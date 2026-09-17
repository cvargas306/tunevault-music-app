// Simulates fetching song metadata from an external API (e.g., a music database).
// Demonstrates TypeScript async/await and Promises.

import { Song } from "./Song";
import { MetadataNotFoundError } from "./errors";

// Type describing the shape of metadata returned by our "fake API"
type SongMetadata = {
  album: string;
  genre: string;
};

// A small mock "database" of metadata, keyed by song id.
// In a real app, this data would come from an actual API response.
const mockMetadataDatabase: Record<string, SongMetadata> = {
  "1": { album: "A Night at the Opera", genre: "Rock" },
  "2": { album: "A Rush of Blood to the Head", genre: "Alternative Rock" },
  "3": { album: "Time Out", genre: "Jazz" },
};

// Simulates a network request delay, returning a Promise that resolves after `ms` milliseconds.
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function that simulates fetching metadata for a given song from a remote service.
// Returns a Promise that resolves with the metadata, or throws if the song isn't found.
export async function fetchSongMetadata(songId: string): Promise<SongMetadata> {
  // Simulate network latency
  await delay(800);

  const metadata = mockMetadataDatabase[songId];

  // Simulate an API error response (e.g., song not found in the remote database)
  if (!metadata) {
    throw new MetadataNotFoundError(songId);
  }

  return metadata;
}

// Async function that fetches metadata and applies it directly to a Song instance.
export async function enrichSongWithMetadata(song: Song): Promise<void> {
  console.log(`Fetching metadata for "${song.title}"...`);
  const metadata = await fetchSongMetadata(song.id);
  song.album = metadata.album;
  song.genre = metadata.genre;
  console.log(`Metadata loaded for "${song.title}": ${metadata.album} (${metadata.genre})`);
}