"use client";

import { Note } from "@/types/note";
import Modal from "../Modal/Modal";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  return (
    <div>
      <Modal onClose={() => router.back()}>
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note?.title}</h2>
            </div>
            <p className={css.content}>{note?.content}</p>
            <p className={css.date}>{note?.createdAt}</p>
          </div>
          <button onClick={() => router.back()}>Close</button>
        </div>
      </Modal>
    </div>
  );
}
