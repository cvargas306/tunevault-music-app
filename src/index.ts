// index.ts
// Entry point for TuneVault.

import { Song } from "./Song";
import { Playlist } from "./Playlist";
import { enrichSongWithMetadata } from "./metadataService";
import { DuplicateSongError } from "./errors";


async function main() {
  // Create some songs
  const song1 = new Song("1", "Bohemian Rhapsody", "Queen", 355);
  const song2 = new Song("2", "Clocks", "Coldplay", 307);
  const song3 = new Song("3", "Take Five", "Dave Brubeck", 324);

  // Fetch and apply metadata asynchronously before displaying anything
  await enrichSongWithMetadata(song1);
  await enrichSongWithMetadata(song2);
  await enrichSongWithMetadata(song3);

  // Create a main playlist and add songs
  const mainPlaylist = new Playlist("My Favorites");
  mainPlaylist.addSong(song1);
  mainPlaylist.addSong(song2);

  // Create a nested sub-playlist
  const jazzPlaylist = new Playlist("Jazz Vibes");
  jazzPlaylist.addSong(song3);
  mainPlaylist.addSubPlaylist(jazzPlaylist);

  // Display everything (now includes album info thanks to metadata)
  mainPlaylist.display();

  console.log("\nTotal duration (recursive sum):", mainPlaylist.getFormattedTotalDuration());

  // Test the duplicate exception
  try {
    mainPlaylist.addSong(song1);
  } catch (error) {
    if (error instanceof DuplicateSongError) {
      console.log("\nCaught expected error:", error.message);
      console.log("Error type:", error.name);
    } else if (error instanceof Error) {
      console.log("\nCaught unexpected error:", error.message);
    }
  }
}

main();