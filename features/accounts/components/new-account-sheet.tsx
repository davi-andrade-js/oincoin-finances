import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/use-new-accounts";

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();
  useNewAccount();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Nova conta</SheetTitle>
          <SheetDescription>
            Crie uma nova conta para controlar suas transações.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
