import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface IonSuccess {
    hash: string; 
}

export const OnSuccess = ({hash}: IonSuccess) => {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="bg-slate-900 flex flex-col w-full items-center">
        <AlertDialogHeader>
          <AlertDialogTitle>Success!</AlertDialogTitle>
          <AlertDialogDescription className="w-full underline">
              <a href={`https://etherscan.io/tx/${hash}`}> 
                View the transaction on Etherscan. 
              </a> 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

