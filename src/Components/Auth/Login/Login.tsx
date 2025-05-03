import { FaGoogle,FaVk ,FaFacebookF, FaTwitter  } from "react-icons/fa";
import { AuthProps } from "../../../type";
import { IoMdClose } from "react-icons/io";

export const Login: React.FC<AuthProps> = ({setAuthModal}) => {
    return <div className="relative flex flex-col gap-4">
        <button className="absolute top-0 right-0 text-white" onClick={() => setAuthModal(false)}><IoMdClose className="text-xl"/></button>
        <h3 className="font-black-Qanelas text-white text-[40px] text-center">Войти</h3>
        <form action="" className="flex flex-col gap-4 ">
            <input type="text" className="bg-space-blue rounded-[10px] text-[17px] font-regular-Qanelas text-white py-5 pl-4" placeholder="Логин, почта или телефон" />
            <input type='password' className="bg-space-blue rounded-[10px] text-[17px] font-regular-Qanelas text-white py-5 pl-4" placeholder="Ваш пароль" />
            <button className="w-full py-4 bg-neon-yellow text-void-blue font-semi-bold-Qanelas rounded-xl">Войти</button>
            <button className="w-full py-4 bg-space-blue text-white font-semi-bold-Qanelas rounded-xl">Зарегестрироваться</button>
        </form>
        <p className="text-royal-blue underline font-[17px] text-center"><a href="#">Восстановить пароль</a></p>
        <div className="flex gap-2 justify-center">
            <button className="bg-space-blue p-2.5 text-white rounded-[10px] hover:bg-vivid-blue ease-in duration-300">
                <FaGoogle/>
            </button>
            <button className="bg-space-blue p-2.5 text-white rounded-[10px] hover:bg-vivid-blue ease-in duration-300">
                <FaVk/>
            </button>
            <button className="bg-space-blue p-2.5 text-white rounded-[10px] hover:bg-vivid-blue ease-in duration-300">
                <FaFacebookF/>
            </button>
            <button className="bg-space-blue p-2.5 text-white rounded-[10px] hover:bg-vivid-blue ease-in duration-300 ">
                <FaTwitter/>
            </button>
        </div>
    </div>
}