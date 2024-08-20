import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

 function TooltipButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <button
          disabled
          className=" bg-slate-600 text-white rounded-lg px-4 py-2"
        >
          Generate Flashcard
        </button>
        </TooltipTrigger>
        <TooltipContent className="duration-50">
          <p>Login/Signup first to Generate FlashCards</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipButton;