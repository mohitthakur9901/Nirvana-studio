import { NumberTicker } from "@/components/ui/number-ticker"

export default function Loading() {

    setTimeout(() => {
        return (
            <NumberTicker
                value={100}
                className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
            />
        )
    }, 1000)

}