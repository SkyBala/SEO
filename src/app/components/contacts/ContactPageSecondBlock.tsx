import React from 'react'

export const ContactPageSecondBlock =() => {
  return (
    <section className='container '>
     <div className="min-h-screen font-raleway flex flex-col justify-center items-start text-start p-8">
                <h1 className="text-white text-[24px] font-bold mb-[30px]">Lets get started!</h1>

      <div className=" p-8 rounded-lg shadow-lg  bg-[white] text-[black] w-full h-[502px] pt-[94px] pl-[86px]">
        <form className="flex flex-row justify-around items-start gap-6 ">
            <div className='flex flex-col justify-between h-[100%]'>
                <div>
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Имя
            </label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              className="w-[326px] border border-gray-300 p-3 rounded-md"
            />
                </div>
                <div className='mt-[40px]'>
                    <label className="block text-lg font-medium mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-[326px] border border-gray-300 p-3 rounded-md"
                    />
                </div>
                <div >
                    <button
                    type="submit"
                    className="bg-[#85FF01] text-[black] font-bold py-3 px-6 rounded-md shadow-md transition-colors mt-[100px]"
                    >
                    ОТПРАВИТЬ
                    </button>
                </div>
            </div>
        
          <div className="flex  w-[519px] flex-col justify-start items-start  h-[100%]">
            <label className=" text-lg font-medium mb-2" htmlFor="request">
              Ваш запрос
            </label>
            <textarea
              id="request"
              placeholder="Напишите свой запрос"
              className="w-[519px] h-[178px] border border-gray-300 p-3 rounded-md  resize-none"
            ></textarea>
              <p className="mt-6 text-gray-600 text-sm text-start">
          Пожалуйста, ознакомьтесь с нашей{' '}
          <a href="#" className="text-[#FF00F5] underline">
            политикой конфиденциальности
          </a>{' '}
          и политикой использования файлов{' '}
          <a href="#" className="text-[#FF00F5] underline">
            cookie
          </a>, чтобы вы поняли, как мы собираем и используем ваши персональные данные.
        </p>
          </div>
     
        </form>
      
      </div>
    </div>
     </section>
  )
}
