
export  const MainPageFourBlock = () => {
  return (
    <section className="h-[921px] container relative">
        <div className=" flex flex-col items-end text-end  pt-[100px]">
            <h3 className="font-raleway text-[80px] leading-[5rem] z-20  font-bold text-end">“We are passionate about <br/> creating visually stunning and functional <span className=" text-[#D13364]">solutions that</span> communicate</h3>
        </div>
        
        <div className="absolute z-20 top-[33.2%] left-[0%]"><img src="/img/6674first.svg" alt="" /></div>
        <div  className="absolute z-20 top-[38.7%] left-[30%]"><img src="/img/6674second.svg" alt="" /></div>
        <div  className="absolute z-20 top-[72%] left-[70%]"><img src="/img/6674three.svg" alt="" /></div>
   
    </section>
  )
}