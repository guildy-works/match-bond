import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react"

export const ServiceDialog = ({ children, buttonText }: { children: React.ReactNode, buttonText?: string }) => {
    let [isOpen, setIsOpen] = useState(() => false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={open}
                className="w-full bg-color3 text-white py-2 rounded-md hover:bg-color3/60 transition duration-300"
            >
                {buttonText ?? "詳細を見る"}
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-20 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0" transition onClose={close}>
                <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-300 ease-out data-[closed]:opacity-0" />

                <div className="fixed inset-0 w-screen">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="flex flex-col z-50 max-h-[90vh] rounded-xl overflow-hidden bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {children}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
