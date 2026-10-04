import { motion } from "framer-motion";

import aboutPhoto from "../assets/about/about.jpeg";

import bassPhoto from "../assets/about/bass.jpeg";
import futsalPhoto from "../assets/about/Futsal.jpeg";
import skatePhoto from "../assets/about/skate.jpeg";
import bolaPhoto from "../assets/about/bola.jpg";
import teaterPhoto from "../assets/about/teater.jpg";


const photos = [
  {
    image: bassPhoto,
    title: "Bass",
    text: "Music since SMA",
    position: "left-[8%] bottom-[18%]",
    rotate: "-6deg",
  },
  {
    image: futsalPhoto,
    title: "Futsal",
    text: "Weekend game",
    position: "right-[8%] top-[38%]",
    rotate: "5deg",
  },
  {
    image: bolaPhoto,
    title: "Football",
    text: "Sunday team",
    position: "right-[10%] bottom-[18%]",
    rotate: "-5deg",
  },
  {
    image: teaterPhoto,
    title: "Theater",
    text: "Campus stage",
    position: "left-[18%] top-[35%]",
    rotate: "5deg",
  },
  {
    image: skatePhoto,
    title: "Skate",
    text: "Street afternoon",
    position: "left-[42%] bottom-[10%]",
    rotate: "-4deg",
  },
];


function Folder({className}){

return(
<div
className={`
absolute
h-[65px]
w-[110px]
rounded-md
bg-[#8fc6f4]
shadow-[0_15px_25px_rgba(0,0,0,.15)]
${className}
`}
>

<div
className="
absolute
left-0
top-[-10px]
h-5
w-12
rounded-t-md
bg-[#8fc6f4]
"
/>

</div>
)

}




export default function About(){

return(

<section

id="about"

className="
relative
h-screen
overflow-hidden
bg-[#d8d1c2]
"


>



{/* PAPER */}

<div
className="
absolute
inset-0
opacity-25
bg-[radial-gradient(#333_1px,transparent_1px)]
[background-size:18px_18px]
"
/>



{/* TITLE */}

<div

className="
absolute
left-8
top-8
z-30
"

>

<p

className="
font-serif
text-[11px]
uppercase
tracking-[0.6em]
text-[#b98f3d]
"

>

PERSONAL ARCHIVE / 01

</p>



<h1

className="
mt-3
font-[family-name:var(--font-display)]
text-7xl
leading-[0.75]
tracking-tight
text-[#111]
"

>

THE

<br/>

PROFILE

</h1>



<p

className="
mt-4
max-w-[160px]
font-serif
text-xs
italic
text-black/50
"

>

A collection of memories, interests, and things that shape my journey.

</p>


</div>






{/* NOTE */}


<motion.div

initial={{
opacity:0,
y:-20,
rotate:-4
}}

animate={{
opacity:1,
y:0,
rotate:-2
}}

transition={{
duration:.6
}}


className="
absolute
right-[10%]
top-10
z-40
w-[250px]
rounded-[22px]
bg-[#fffdf4]
px-5
pb-5
pt-4
shadow-[0_20px_40px_rgba(0,0,0,.18)]
"

>


{/* tape */}

<div

className="
absolute
left-1/2
top-[-10px]
h-5
w-14
-translate-x-1/2
rotate-[-5deg]
bg-[#d8c59b]/80
"

/>



<div

className="
flex
items-center
gap-1.5
"

>

<span className="
h-2
w-2
rounded-full
bg-red-400
"/>

<span className="
h-2
w-2
rounded-full
bg-yellow-400
"/>

<span className="
h-2
w-2
rounded-full
bg-green-400
"/>

</div>



<p

className="
mt-3
font-serif
text-[9px]
italic
text-black/40
"

>

June 25, 2026

</p>



<h3

className="
mt-1
font-[family-name:var(--font-display)]
text-xl
tracking-wide
"

>

ABOUT ME

</h3>




<div

className="
mt-3
space-y-1
text-[11px]
leading-5
font-medium
text-black/70
"

>

<p>01 — Data Analyst</p>

<p>02 — Technology Explorer</p>

<p>03 — Music & Sports</p>

<p>04 — Creative Mind</p>

</div>




<div

className="
mt-4
border-t
border-black/10
pt-2
text-[8px]
uppercase
tracking-[0.3em]
text-black/40
"

>

ANDRY_NOTE

</div>



</motion.div>








{/* MAIN PHOTO */}

<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

className="
absolute
left-1/2
top-1/2
z-10
w-[390px]
-translate-x-1/2
-translate-y-1/2
rotate-[-3deg]
"

>


<div

className="
overflow-hidden
rounded-sm
bg-white
shadow-[0_25px_50px_rgba(0,0,0,.25)]
"

>


<div

className="
flex
h-7
items-center
gap-2
bg-[#eee]
px-3
"

>

<span className="h-2 w-2 rounded-full bg-red-400"/>
<span className="h-2 w-2 rounded-full bg-yellow-400"/>
<span className="h-2 w-2 rounded-full bg-green-400"/>


<p

className="
ml-3
text-[8px]
tracking-[0.4em]
text-black/40
"

>

ANDRY_ARCHIVE

</p>


</div>




<img

src={aboutPhoto}

alt="Muhamad Andry"

className="
h-[380px]
w-full
object-cover
"

/>


</div>



<p

className="
mt-3
text-center
font-serif
text-lg
italic
"

>

Muhamad Andry

</p>


<p

className="
text-center
text-[8px]
uppercase
tracking-[0.4em]
text-black/40
"

>

DATA ANALYST
<br/>
CREATIVE EXPLORER

</p>



</motion.div>









{/* POLAROID */}


{

photos.map((item,index)=>(


<motion.article

key={item.title}

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:index*.1
}}

whileHover={{
y:-10,
rotate:0
}}

className={`
absolute
${item.position}
z-20
w-[150px]
`}

style={{
rotate:item.rotate
}}

>


<div

className="
relative
bg-[#fffdf4]
p-3
pb-9
shadow-[0_15px_30px_rgba(0,0,0,.25)]
"

>


<div

className="
absolute
left-1/2
top-[-12px]
h-5
w-12
-translate-x-1/2
rotate-[-5deg]
bg-[#d8c59b]/80
"

/>



<img

src={item.image}

alt={item.title}

className="
h-[110px]
w-full
object-cover
"

/>



<p

className="
absolute
bottom-2
left-0
right-0
text-center
font-serif
text-xs
italic
"

>

{item.title}

</p>



</div>



<p

className="
mt-2
text-center
text-[8px]
uppercase
tracking-[0.25em]
text-black/50
"

>

{item.text}

</p>



</motion.article>


))

}







{/* DECOR */}

<div

className="
absolute
left-[3%]
top-[30%]
h-3
w-3
rounded-full
bg-[#e60023]
"

/>


<div

className="
absolute
right-[4%]
top-[25%]
rotate-12
border
border-black/20
px-4
py-2
text-[8px]
uppercase
tracking-widest
"

>

MEMORIES

</div>



<Folder className="left-[5%] top-[45%]" />

<Folder className="right-[6%] bottom-[22%]" />

<Folder className="left-[45%] bottom-[4%]" />



</section>


)

}
