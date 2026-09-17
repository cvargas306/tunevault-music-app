// Custom exception classes for TuneVault.
// Demonstrates TypeScript class inheritance (extending the built-in Error class).

// Thrown when trying to add a song that already exists in a playlist.
export class DuplicateSongError extends Error {
  constructor(songTitle: string, playlistName: string) {
    // Call the parent Error constructor with a descriptive message
    super(`Duplicate song detected: "${songTitle}" is already in "${playlistName}"`);
    // Set the name property to the class name, useful for identifying error type at runtime
    this.name = "DuplicateSongError";
  }
}

// Thrown when a song is created with an invalid duration (zero or negative).
export class InvalidDurationError extends Error {
  constructor(songTitle: string, duration: number) {
    super(`Invalid duration for song "${songTitle}": ${duration}`);
    this.name = "InvalidDurationError";
  }
}

// Thrown when metadata for a song cannot be found in the (simulated) remote service.
export class MetadataNotFoundError extends Error {
  constructor(songId: string) {
    super(`Metadata not found for song id: ${songId}`);
    this.name = "MetadataNotFoundError";
  }
}