// El div html que recoje y muestra la info:
<div id=”fecha”></div>

// El script js, con  su función:
<script type=”text/javascript”>
setInterval(function(){
document.getElementById(“fecha”).innerHTML = new Date();
},1000);
</script>
