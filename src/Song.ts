// Represents a single with its metadata.
// Demonstrates Typscript classes, access modifiers, and optional properties.
import { InvalidDurationError } from "./errors";

export class Song {
  // Public properties with explicit types (Typscript syntax feature: type annotations).
    public id: string;
    public title: string
    public artist: string;
    public duration: number; // Duration in seconds

    // Optional properties (marked with "?"): filled in later via async metadata fetching
    public album?: string;
    public genre?: string;

    // Contructor: initializes a new Song instance
    constructor(id: string, title: string, artist: string, duration: number) {
        // Basic validation: throws and exception if duration is invalid (negative or zero)
        if (duration <= 0) {
            throw new InvalidDurationError(title, duration);
        }
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    // Method to format duration as mm:ss for terminal display
    public getFormattedDuration(): string {
        const minutes = Math.floor(this.duration / 60);
        const seconds = this.duration % 60;
        // padStart ensures seconds always show two digits (e.g. "05" instead of "5")
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    // Method to display the song's info in a readable format for the terminal
    public display(): string {
        const albumInfo = this.album ? ` [${this.album}]` : "";
        return `${this.title} - ${this.artist}${albumInfo} (${this.getFormattedDuration()})`;
    }
}