'use client'
import Link from "next/link"
import classnames from 'classnames'
import Image from "next/image"
import { usePathname } from 'next/navigation'

let arrow=<svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.0138483L7.72899 0L8.5 5.5L6.9291 7.22039L6.28481 2.82077L1.22695 8.49332L0 7.37298L5.07255 1.68406L0.430738 1.73245L2 0.0138483Z" fill="#E9E9E9"/>
</svg>
function NavUnit({children,brdr,brdrr}:{children:React.ReactNode|string,brdr:boolean,brdrr:boolean}){

return <div style={{borderRight:brdrr?'2px solid white':""}} className={classnames({
    '':brdr===false,
    'border-b-[1px] ':brdr===true,
'2xl:text-[16px] text-[12px] font-bold flex \
 justify-center\
  items-center 2xl:p-[20px] p-[10px] border-b-white border-r-white  w-[100%]':true
  })}
   
   >{children}</div>

}

export function Nav(){

    const currentPath= usePathname()
    return <div className={classnames({
        'bg-[#222629] bg-opacity-50':`/`===currentPath,
        'bg-[#1f1f1f]':`/`!==currentPath,
        '  text-white left absolute z-10 flex w-full pt-[10px]':true
      })}>
      
 

 <nav className="flex justify-between w-full ">
<NavUnit brdr={false} brdrr={false} >
<Image
    src='/mouse.png'
 alt='mouse'
 width={29}
 height={2}
 />

</NavUnit>

 
 <NavUnit brdr={true} brdrr={true}>
    <Link className="flex items-center" href='/'>Сергей Игнатьев {arrow}</Link>
 </NavUnit>
 <NavUnit brdr={true} brdrr={true}>
    <Link className="flex items-center" href='/projects'>Проекты {arrow}</Link>
 </NavUnit>
 <NavUnit brdr={true} brdrr={true}>
    <Link className="flex items-center" href='/skills'>Навыки {arrow}</Link>
 </NavUnit>
 <NavUnit brdr={true} brdrr={true}>
    <Link className="flex items-center" href='/skills'>Контакты  {arrow}</Link>
 </NavUnit>
 <NavUnit brdr={true} brdrr={false}>
 +7 (965) 459 35-51
   
 </NavUnit>
 <NavUnit brdr={true} brdrr={true}>
 ignatevsergey17@gmail.com
 </NavUnit>
 <NavUnit brdr={true} brdrr={false}>
    <Link className="flex items-center" href='/skills'>RU{arrow}</Link>
 </NavUnit>
 </nav>
        </div>
}