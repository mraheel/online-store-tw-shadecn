import Signin from "@/components/account/signin"
import Signup from "@/components/account/signup"

const Account = () => {
    return (
        <div className="mx-32 my-16 flex gap-32 justify-between justify-items-center mt-24">

            <div className="w-full flex flex-col">
                <Signin />
            </div>
            
            <div className="h-56 items-center m-auto align-middle justify-center">
                <div className="border border-gray-300 h-2/3"></div>
            </div>
            
            <div className="w-full flex flex-col">
                <Signup />
            </div>

        </div>
    )
}

export default Account