import { Button } from "@/components/ui/button";
import { CheckIcon, Edit, XIcon } from "lucide-react";

interface Props {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
}

const EditTodoBtn = ({
  setEditMode,
  editMode,
  handleCancelEdit,
  handleSaveEdit,
}: Props) => {
  if (editMode)
    return (
      <>
        <Button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleCancelEdit}
          className="size-7"
          variant={"destructive"}
        >
          <XIcon />
        </Button>
        <Button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleSaveEdit}
          className="size-7"
        >
          <CheckIcon />
        </Button>
      </>
    );
  return (
    <Button
      onClick={() => setEditMode((prev) => !prev)}
      className="size-7"
      variant={"ghost"}
    >
      <Edit />
    </Button>
  );
};
export default EditTodoBtn;
