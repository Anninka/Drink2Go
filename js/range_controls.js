const rangeControls=document.querySelector(".range-controls");if(rangeControls){noUiSlider.create(rangeControls,{start:[0,900],connect:!0,step:10,range:{min:0,max:1e3}});const e=[document.getElementById("minprice"),document.getElementById("maxprice")];rangeControls.noUiSlider.on("update",(function(n,t){e[t].value=Math.round(n[t])}));const n=(e,n)=>{let t=[null,null];t[e]=n,rangeControls.noUiSlider.set(t)};e.forEach(((e,t)=>{e.addEventListener("change",(e=>{n(t,e.currentTarget.value)}))}))}