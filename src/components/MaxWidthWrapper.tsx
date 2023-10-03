import { cn } from "@/lib/utils"

type MaxWidthWrapper = {
    children: React.ReactNode,
    className?: string
}


const MaxWidthWrapper = ({children, className}: MaxWidthWrapper) => {
    return (
        <div className={cn("mx-auto max-w-screen-xl w-full px-2.5 md:px-20", className)}>{children}</div>
    )
}


export default MaxWidthWrapper