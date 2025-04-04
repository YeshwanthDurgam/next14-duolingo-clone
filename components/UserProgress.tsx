import Link from "next/link";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { courses } from "@/db/schema";
import { Button } from "./ui/button";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
    hasActiveSubscription
}:Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full"> 
            <Link href="/courses">
                <Button>
                    <Image src={activeCourse.imageSrc}
                    alt={activeCourse.title}
                    className="rounded-md border"
                    width={32}
                    height={32} />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500 mr-2">
                    <Image src="/points.svg" height={28} width={28} alt="Points"/>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500 mr-2">
                    <Image src="/heart.svg" height={22} width={22} alt="Hearts"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
                </Button>
            </Link>
        </div>
    )
}