import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DefaultBtn from "../buttons/DefaultBtn";
import  { setupModalFromTypes }  from "@/utils/setupModalFromTypes"

interface DefaultModalProps {
  modalType: string | null;
  onClose: () => void;
  description: string;
}

const DefaultModal: React.FC<DefaultModalProps> = ({modalType, onClose}) =>   {

  const modal = modalType ? setupModalFromTypes(modalType) : null;

  if (!modal) {
    return null;
  }

  return (
    <Dialog open={!!modalType} onOpenChange={(open) => !open && onClose()} >
      <DialogContent className={`bg-[#c7dbec] sm:max-w-[425px]`}>
        <DialogHeader>
          <DialogTitle>{modal.title}</DialogTitle>
          <DialogDescription>
            {modal.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {modal.fields.map((field, index) => {
            return (
              <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={field.label} className={`text-right ${field.classname}`}>{field.label}</Label>
                <Input
                  id={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required} 
                  className="col-span-3"             
                />
              </div>              
            )})
          }          
        </div>
        <DialogFooter className="gap-0">
          {modal.footer?.html}          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DefaultModal;