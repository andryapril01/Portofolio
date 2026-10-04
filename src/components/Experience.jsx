import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import YamahaImg from "../assets/experience/yamaha.jpg";
import YamahaTextImg from "../assets/experience/text yamaha.jpg";
import YamahaProfileImg from "../assets/experience/profil yamaha.jpg";

import ToyotaImg from "../assets/experience/Toyota.jpg";
import ToyotaTextImg from "../assets/experience/text toyota.jpg";
import ToyotaProfileImg from "../assets/experience/profil toyota.jpg";


export default function Experience(){


const pages = [

YamahaImg,
YamahaTextImg,
YamahaProfileImg,

ToyotaImg,
ToyotaTextImg,
ToyotaProfileImg

];



const [page,setPage] = useState(0);

const [direction,setDirection] = useState(1);



const [pencil,setPencil] = useState({

show:false,
x:0,
y:0

});




// klik kanan halaman
function next(){

if(page < pages.length-1){

setDirection(1);

setPage(page+1);

}

}



// klik kiri halaman
function prev(){

if(page > 0){

setDirection(-1);

setPage(page-1);

}

}




function handleBookClick(e){

const box = e.currentTarget.getBoundingClientRect();

const mouseX = e.clientX - box.left;



if(mouseX > box.width / 2){

next();

}

else{

prev();

}

}





function movePencil(e){

const box = e.currentTarget.getBoundingClientRect();


setPencil({

show:true,

x:e.clientX - box.left,

y:e.clientY - box.top

});


}






return (

<section

id="experience"

className="
min-h-screen
bg-[#e9dfc8]
flex
items-center
justify-center
py-10
overflow-hidden
"

>



<div

className="
flex
flex-col
items-center
"

>



<p

className="
uppercase
tracking-[0.6em]
text-xs
text-black/40
mb-3
"

>

Portfolio

</p>





<h1

className="
font-serif
text-5xl
md:text-6xl
text-[#2b2721]
mb-8
"

>

Experience Sketchbook

</h1>







<div


onClick={handleBookClick}

onMouseMove={movePencil}

onMouseLeave={()=>setPencil({

...pencil,

show:false

})}



className="
relative
w-[620px]
md:w-[650px]
max-w-[85vw]
aspect-[1.55/1]
cursor-none
"



style={{

perspective:"2500px"

}}


>




<div


className="
absolute
inset-0
rounded-[22px]
overflow-hidden
bg-[#faf7ef]
shadow-[0_40px_90px_rgba(0,0,0,.22)]
"


style={{

transformStyle:"preserve-3d"

}}

>





{/* BOOK SPINE SHADOW */}


<div


className="
absolute
left-1/2
top-0
bottom-0
w-[28px]
-translate-x-1/2
z-30
pointer-events-none
"


style={{


background:

"linear-gradient(90deg,rgba(0,0,0,.12),transparent,rgba(0,0,0,.12))",


filter:"blur(6px)"


}}

/>







<AnimatePresence mode="wait">


<motion.div


key={page}



initial={{

rotateY:0

}}



animate={{

rotateY:0

}}



exit={{

rotateY:

direction===1

?

-180

:

180

}}



transition={{

duration:1.15,

ease:[

0.65,

0,

0.35,

1

]

}}



style={{


transformOrigin:

direction===1

?

"right center"

:

"left center",



transformStyle:"preserve-3d",


backfaceVisibility:"hidden"


}}



className="
absolute
inset-0
overflow-hidden
rounded-[22px]
bg-[#faf7ef]
"



>


<img

src={pages[page]}

alt="experience"

className="
w-full
h-full
object-cover
select-none
"

/>




</motion.div>


</AnimatePresence>





</div>








{/* PENCIL CURSOR */}



{

pencil.show && (



<motion.div


initial={{

opacity:0,

scale:.5,

rotate:-35

}}



animate={{

opacity:1,

scale:1,

rotate:-25

}}



transition={{

duration:.2

}}



className="
absolute
z-50
pointer-events-none
"



style={{

left:pencil.x+18,

top:pencil.y-30

}}



>


<div

className="
relative
w-[22px]
h-[130px]
"

>



{/* BODY */}


<div

className="
absolute
left-1/2
-translate-x-1/2
w-[16px]
h-[95px]
rounded-t-full
bg-[#d4a15b]
shadow-lg
"

/>



{/* WOOD */}


<div

className="
absolute
top-[-12px]
left-1/2
-translate-x-1/2
w-0
h-0
border-l-[8px]
border-r-[8px]
border-b-[14px]
border-l-transparent
border-r-transparent
border-b-[#d8c3a5]
"

/>



{/* GRAPHITE */}


<div

className="
absolute
top-[-18px]
left-1/2
-translate-x-1/2
w-0
h-0
border-l-[3px]
border-r-[3px]
border-b-[7px]
border-l-transparent
border-r-transparent
border-b-black
"

/>



{/* METAL */}


<div

className="
absolute
bottom-[22px]
left-1/2
-translate-x-1/2
w-[16px]
h-[18px]
bg-[#bcbcbc]
"

/>



{/* ERASER */}


<div

className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[16px]
h-[14px]
rounded-b-md
bg-[#df9999]
"

/>



</div>


</motion.div>



)

}





</div>






<p

className="
mt-6
uppercase
tracking-[0.5em]
text-xs
text-black/40
"

>

Page {page+1} / {pages.length}

</p>




</div>



</section>

);


}