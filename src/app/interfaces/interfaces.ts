interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  Icon?: React.ComponentType<{ className: string }>;
  func: (param: T) => T;
}

interface NoteProps {
  id: number;
  titulo: string;
  descricao: string;
}

interface GetNotesProps {
  user: number;
  setNotes: React.Dispatch<React.SetStateAction<string | undefined>>;
}
