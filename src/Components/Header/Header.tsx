import logo from '@assets/Img/Logo.png'
import { FaVk, FaInstagram, FaFacebookF , FaTwitter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


export const Header = () => {
    return <header className=" fixed top-5 left-0 w-full">
        <div className='container flex justify-between items-center h-[56px]'>
            <div className='flex flex-col gap-2.5'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-4 text-[#686868]'>
                    <FaVk/>
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTwitter/>
                </div>
            </div>
            <div className='flex-1 mx-5 w-full'>
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
            <button className='bg-white rounded-[10px] h-[52px] w-[55px] flex items-center justify-center mr-3'><IoIosSearch className=' text-2xl text-vivid-blue' /></button>
            <button className='text-white font-bold-Qanelas px-[47px] py-[13px] bg-vivid-blue rounded-[10px]'>Войти</button>
        </div>
    </header>
} 