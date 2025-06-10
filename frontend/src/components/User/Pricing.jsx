import { Badge } from "@/components/ui/badge";
import PricingCard from "../shared/PricingCard";
import { ShieldPlus, TestTube } from "lucide-react";

function Pricing() {
    return (
        <>
            <div className="w-full py-5 lg:py-10">
                <div className="container mx-auto">
                    <div className="flex text-center justify-center items-center gap-4 flex-col">
                        <Badge>Pricing</Badge>
                        <div className="flex gap-2 flex-col">
                            <h2 className="font-semibold text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                                Prices that make sense!
                            </h2>
                            <p className="font-medium text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                                See the vaccination and covid test pricing
                            </p>
                        </div>
                        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-2 w-full gap-8">
                            <PricingCard title="Vaccination" price={4000} icon={<ShieldPlus />}/>
                            <PricingCard title={`Covid Test`} price={15000} icon={<TestTube />}/>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Pricing