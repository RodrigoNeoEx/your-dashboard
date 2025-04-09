import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import  { useModal }  from "@/utils/useModal"

interface DefaultModalProps {
  modalType: string | null;
  onClose: () => void;
}

const DefaultModal: React.FC<DefaultModalProps> = ({modalType, onClose}) =>   {

  const modal = useModal(modalType || "")

  if (!modal) {
    return null;
  }

  return (
    <Dialog open={!!modalType} onOpenChange={(open) => !open && onClose()} >
      <DialogContent className={`bg-[#c7dbec] max-w-[425px] sm:min-w-[30%] dark:bg-[#0e1c27] justify-evenly sm:[&>:last-child>svg]:w-[35px] sm:[&>:last-child>svg]:h-[35px] 
        sm:[&>:last-child>svg]:border-5 [&>:last-child>svg]:border-solid [&>:last-child>svg]:rounded-[10px] [&>:last-child>svg]:!border-t-transparent [&>:last-child>svg]:!border-r-transparent
        [&>:last-child>svg]:border-[#0060d136] dark:[&>:last-child>svg]:border-[#ffffff8c] `}>
        <DialogHeader>
          <DialogTitle className="sm:text-3xl sm:text-center">{modal.title}</DialogTitle>
          <DialogDescription className="sm:text-3xl sm:text-center">
            {modal.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          {modal.fields.map((field, index) => {
            return (
              <div key={index} className="grid grid-cols-4 items-center gap-4 sm:w-md md:w-auto md:justify-items-center">
                <Label htmlFor={field.label} className={`text-center sm:text-2xl ${field.classname}`}>{field.label}</Label>
                <Input
                  id={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required} 
                  className="col-span-3 sm:text-2xl md:text-3xl h-auto text-center bg-[#bad8f1] dark:bg-[#184e7e] dark:text-white text-[#184e7e] border-[#184e7e] border-2 focus-visible:ring-0 focus-visible:border-[#184e7e] focus-visible:outline-none placeholder:text-[#184e7e] placeholder:opacity-50 dark:placeholder:text-white"             
                />
              </div>              
            )})
          }          
        </div>
        <DialogFooter className="gap-0 grid sm:!justify-center">
          {modal.footer?.html}          
        </DialogFooter>      
      </DialogContent>
    </Dialog>
  )
}

export default DefaultModal;