// simple_music_player.js

class MusicPlayer {
    constructor() {
        this.playlist = [];
        this.currentIndex = 0;
        this.isPlaying = false;
    }

    addSong(song) {
        this.playlist.push(song);
    }

    play() {
        this.isPlaying = true;
        console.log(`Now playing: ${this.playlist[this.currentIndex]}`);
    }

    pause() {
        this.isPlaying = false;
        console.log('Music paused.');
    }

    next() {
        if (this.currentIndex < this.playlist.length - 1) {
            this.currentIndex++;
            this.play();
        } else {
            console.log('End of playlist.');
        }
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.play();
        } else {
            console.log('Beginning of playlist.');
        }
    }
}

// Example usage
const player = new MusicPlayer();
player.addSong('Song 1');
player.addSong('Song 2');
player.play();
player.next();
