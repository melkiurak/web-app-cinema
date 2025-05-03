import { AuthProps } from "../../type"
import { Login } from "./Login/Login"
export const Auth: React.FC<AuthProps> = ({setAuthModal}) => {
    return <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-dark-navy">
       <div className="max-w-[422px] w-full">
         <Login setAuthModal={setAuthModal} />
       </div>
    </div>
}