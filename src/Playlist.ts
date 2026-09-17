// Represents a playlist that can contain multiple songs and nested sub-playlists.
// Demonstrates TypeScript classes, lists (arrays), recursion, and custom exceptions.
import { Song } from "./Song";
import { DuplicateSongError } from "./errors";

export class Playlist {
    public name: string;
    public songs: Song[] = []; // List (array) of Song objects
    public subPlaylists: Playlist[] = []; // Nested playlists, used to demonstrate recursion

    constructor(name: string) {
        this.name = name;
    }

    // Add a song to the playlist. Throws an exception if it's a duplicate (by id)
    public addSong(song: Song): void {
        const isDuplicate = this.songs.some((existing) => existing.id === song.id);
        if (isDuplicate) {
            throw new DuplicateSongError(song.title, this.name);
        } 
        this.songs.push(song);
    }

      // Adds a nested sub-playlist (e.g., a "Workout" playlist inside a "Favorites" playlist)
    public addSubPlaylist(playlist: Playlist): void {
    this.subPlaylists.push(playlist);
  }

    // Recursive method: calculates total duration of this playlist,
    // including the duration all songs in nested sub-playlists.
    public getTotalDuration(): number {
        // Base case contribution: sum durations of direct songs in this playlist
        let total = this.songs.reduce((sum, song) => sum + song.duration, 0);

        // Recursive case: add the total dirations of each nested sub-playlist
        for (const subPlaylist of this.subPlaylists) {
            total += subPlaylist.getTotalDuration(); // recursive call
        }

        return total;
    }

    // Formats total duration as mm:ss reusing the same style as Song 
    public getFormattedTotalDuration(): string {
        const totalDuration = this.getTotalDuration();
        const minutes = Math.floor(totalDuration / 60);
        const seconds = totalDuration % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    // Displays the playlist and all nested sub-playlists to the terminal, recursively.
    // The "indent" parameter grows with each recursive call, visually nesting sub-playlists.
    public display(indent: string = ""): void {
        console.log(`${indent}- ${this.name} (${this.getFormattedTotalDuration()})`);
        for (const song of this.songs) {
            console.log(`${indent}  * ${song.display()}`);
        }
        for (const subPlaylist of this.subPlaylists) {
            subPlaylist.display(indent + "  "); // recursive call with increased indentation
        }                   
    }  
} 
