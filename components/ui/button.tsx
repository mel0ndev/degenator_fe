import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        uniswap:"bg-[#FF007A] font-poppins text-lg text-white hover:bg-[#FF007A]/80 flex items-center",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
          socials: "bg-[#B2BEE5] p-2 hover:bg-[#B2BEE5]/80",
        stake: "rounded-xl text-black text-3xl font-bukabird bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#DEF9FA] via-[#66BEE8] to-[#4894E8] hover:from-[#DEF9FA]/80 hover:via-[#66BEE8]/80 hover:to-[#4894E8]/80",
         legendary: "rounded-xl text-black text-3xl font-bukabird bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#FFA7FE] via-[#FC67FA] to-[#FF007A] hover:from-[#FFA7FE]/80 hover:via-[#FC67FA]/80 hover:to-[#FF007A]/80",
          connectMobile:"bg-gradient-to-r from-[#66BEE8] to-[#5060FC] hover:from-[#66BEE8]/50 hover:to-[#5060FC]/50 font-poppins rounded-sm font-bold text-lg text-white flex items-center",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-12",
        xl: "h-11 rounded-md px-24",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
