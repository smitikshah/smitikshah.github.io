<script>
 
    $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="https://kahimyang.com/resources/sound/click.mp3";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".playSound").click(function() {
            obj.play();
        });
 
    });
 
</script>