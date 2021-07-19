

//pause and play video
function myFunction()
{
var video=document.getElementById("myVideo");
//Get the Button
var btn=document.getElementById("myBtn");

     if(video.play())
     {
        video.pause();
        btn.innerHTML="Play";
        console.log(786)
    }
else if(video.pause())
{
    video.play();
    btn.innerHTML="Pause";
    console.log(7866)
}


}