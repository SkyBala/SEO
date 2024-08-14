
export  const MainPageThirdBlock =() => {
  return (
    <section className="space-y-4 p-4 container pt-[50px]">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full" />
        <span className="font-raleway font-medium text-[18px]">◯ что мы предлагаем</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <span className="text-[34px] font-semibold">3D motion ролики</span>
          <img src="/img/3pink.jpg" alt="3D motion ролики" className="w-[630px] h-[180px] rounded" />
        </div>
        <div className="flex items-center justify-between border-b pb-4">
          <span className="text-[34px] font-semibold">CGI/VFX ролики</span>
          <img src="/img/3black.png" alt="CGI/VFX ролики" className="w-[630px] h-[180px] rounded" />
        </div>
        <div className="flex items-center justify-between border-b pb-4">
          <span className="text-[34px] font-semibold">Аутсорсинг визуализации</span>
          <img src="/img/3green.png" alt="Аутсорсинг визуализации" className="w-[630px] h-[180px] rounded" />
        </div>
      </div>
    </section>
  )
}