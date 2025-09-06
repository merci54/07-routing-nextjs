import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ModalPreview({ params }: Props) {
  const { id } = await params;
  const data = await fetchNoteById(id);
  console.log(data);
  return (
    <div>
      <NotePreview note={data} />
    </div>
  );
}
