{/* smaller one overrides  */}
/*
    <div className="max-sm:bg-amber-500 max-md:bg-amber-700">
      <p>I appear on screen wider than 768px</p>
    </div>
*/
//my tested well worked responsiveness it works form 
//small to big screen
//w-full just taking the whole screen width
//and bigger then small screen color is yellow
//width is still full
//and for bigger then larger screen (1/s laptop screen size)
//max width is set to 1536px 
//very clever approach
<div 
className="bb h-screen w-full bg-red-500
 sm:bg-yellow-500 
 lg:max-w-[1536px] lg:mx-auto lg:bg-green-500">
      hello
</div>
