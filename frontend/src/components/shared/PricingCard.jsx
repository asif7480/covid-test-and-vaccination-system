import { Check, MoveRight, ShieldPlus } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
function PricingCard({ title, price, icon }) {
    return (
        <>
            <Card className="w-full rounded-md">
                <CardHeader>
                    <CardTitle>
                        <span className="flex flex-row gap-4 items-center font-normal text-2xl">
                            { title }
                        </span>
                    </CardTitle>
                    <CardDescription>
                        Our goal is to streamline SMB trade, making it easier and faster
                        than ever for everyone and everywhere.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-8 justify-start">
                        <p className="flex flex-row  items-center gap-2 text-xl">
                            <span className="text-4xl">Rs. {price}</span>
                            
                        </p>
                        <div className="flex flex-col gap-4 justify-start">
                            <div className="flex flex-row gap-4">
                                <Check className="w-4 h-4 mt-2 text-primary" />
                                <div className="flex flex-col">
                                    <p>Fast and reliable</p>
                                    <p className="text-muted-foreground text-sm">
                                        We&apos;ve made it fast and reliable.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Check className="w-4 h-4 mt-2 text-primary" />
                                <div className="flex flex-col">
                                    <p>Fast and reliable</p>
                                    <p className="text-muted-foreground text-sm">
                                        We&apos;ve made it fast and reliable.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Check className="w-4 h-4 mt-2 text-primary" />
                                <div className="flex flex-col">
                                    <p>Fast and reliable</p>
                                    <p className="text-muted-foreground text-sm">
                                        We&apos;ve made it fast and reliable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button className="gap-4">
                            Book Today <span className="w-4 h-4">{icon}</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default PricingCard