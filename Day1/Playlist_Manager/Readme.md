# Playlist History Manager

## Problem Background
You are building a playlist manager for a music app. Users can add songs to their playlist and undo their last action if they make a mistake. Your task is to implement this functionality using a stack.

The undo feature will allow users to remove the last song added to the playlist. The system does not need to support a redo feature for now, keeping the task simple.

## Problem Statement
Write a function to simulate the add song and undo last action functionality of a playlist manager. The function should process a series of actions and return the final state of the playlist.

### Actions:
1. `addSong("Song Name")` - Adds a song to the playlist.
2. `undo()` - Removes the most recently added song.

The function should process a list of these actions and return the final playlist.

## Input Format
- A list of strings, where each string represents an action.
- `1 ≤ number of actions ≤ 100`

## Output Format
- A list of strings, where each string represents a song in the final playlist.

## Example
### Input:
```javascript
["addSong(\"Song 1\")", "addSong(\"Song 2\")", "undo()", "addSong(\"Song 3\")"]
```

### Output:
```javascript
["Song 1", "Song 3"]
```

## Explanation
1. Add "Song 1" → Playlist: `["Song 1"]`
2. Add "Song 2" → Playlist: `["Song 1", "Song 2"]`
3. Undo last action (remove "Song 2") → Playlist: `["Song 1"]`
4. Add "Song 3" → Playlist: `["Song 1", "Song 3"]`

## Constraints
1. `1 ≤ number of actions ≤ 100`
2. Actions will always be valid (e.g., `undo()` will only appear if there is at least one song to undo).

## Approach
- Use a **stack** data structure to manage the playlist.
- When `addSong("Song Name")` is encountered, push the song onto the stack.
- When `undo()` is encountered, pop the last song from the stack.
- Return the final state of the stack as a list.

## Implementation
You can implement the solution in JavaScript using a simple array-based stack.



## Usage Example
```javascript
const actions = ["addSong(\"Song 1\")", "addSong(\"Song 2\")", "undo()", "addSong(\"Song 3\")"];
console.log(playlistManager(actions));
// Output: ["Song 1", "Song 3"]
```



