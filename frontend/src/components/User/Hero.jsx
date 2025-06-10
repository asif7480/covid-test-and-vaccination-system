import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

function Hero() {
    return (
        <>
            <div 
                className="bg-cover bg-bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
            >
                <div className="h-[700px] w-[85%] lg:w-3/4 mx-auto flex flex-col justify-center items-center">
                    <h2 className="font-bold text-center text-4xl lg:text-6xl mb-10 text-gray-200">Welcome to hospital website</h2>
                    <p className="font-normal leading-relaxed text-md lg:text-lg text-center  mb-5 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet alias iste ipsam ex possimus suscipit! Similique cum ipsa eaque, repellat illo saepe nobis harum, illum excepturi voluptate voluptatibus facere consectetur doloremque molestias est deserunt, ad aut incidunt dolore totam a doloribus voluptates aliquid. Maxime, assumenda eligendi amet vero est sapiente nostrum. Nemo recusandae eveniet dolore saepe in. Neque repudiandae perferendis omnis quam nobis totam ea aperiam illo veritatis. Ratione maiores sunt autem doloremque rerum.</p>
                    <Button  className={`px-10 py-5`}>Click me</Button>
                </div>
            </div>


        </>
    )
}

export default Hero