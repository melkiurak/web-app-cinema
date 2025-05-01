import logo from '@assets/Img/Logo.png'
import { FaVk, FaInstagram, FaFacebookF , FaTwitter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


export const Header = () => {
    return <header className=" fixed top-5 left-0 w-full ">
        <div className='container relative flex justify-between items-center max-lg:flex-col max-lg:gap-6'>
            <div className='flex flex-col justify-center items-center gap-2.5'>
                <img src={logo} alt="" className='max-md:w-[94px] max-md:h-[24px]' />
                <div className='flex items-center gap-4 max-md:gap-2 text-[#686868]'>
                    <FaVk/>
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTwitter/>
                </div>
            </div>
            <div className='flex-1 mx-5 w-full max-md:hidden'>
                <nav className='!flex justify-center items-center'>
                    <ul className='flex items-center gap-[55.6px] max-xl:gap-7 text-white font-bold-Qanelas'>
                        <li><a href="#s">Афиша</a></li>
                        <li><a href="#s">Медиа</a></li>
                        <li><a href="#s">Фильмы</a></li>
                        <li><a href="#s">Актёры</a></li>
                        <li><a href="#s">Новости</a></li>
                        <li><a href="#s">Подборки</a></li>
                        <li><a href="#s">Категории</a></li>
                    </ul>
                </nav>
            </div>
            <button className='bg-white rounded-[10px] px-[14px] max-xl:px-[9.5px] max-md:px-[2px] py-[15px] max-xl:py-[8.5px] max-md:py-[1.5px] flex items-center justify-center mr-3 max-lg:mr-0 max-lg:absolute max-lg:left-4 max-lg:top-0'><IoIosSearch className=' text-2xl max-lg:text-2xl text-vivid-blue' /></button>
            <button className='text-white font-bold-Qanelas px-[47px] max-xl:px-[28px] max-lg:px-[24.2px] max-md:px-[11px] py-[13px] max-xl:py-[10px] max-lg:py-[8px] max-md:py-[2px] bg-vivid-blue rounded-[10px] max-lg:absolute max-lg:right-4 max-lg:top-0'>Войти</button>
        </div>
    </header>
} 