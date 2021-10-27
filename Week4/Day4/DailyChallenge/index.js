

//Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)


class Video {
    constructor(title,uploader,time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    //Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

//Instantiate a new Video instance and call the watch() method.

class OtherVideo {
    constructor(kind,release){
        this.kind = kind;
        this.release = release;
    }
}