// return the final playlist only
function playlistManager(actions) {
    let stack = [];

    actions.forEach(action => {
        if (action.startsWith("addSong(") && action.endsWith(")")) {
            let song = action.slice(9, -2); // Extract song name
            stack.push(song);
        } else if (action === "undo()" && stack.length > 0) {
            stack.pop();
        }
    });

    return stack;
}




