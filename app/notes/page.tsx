import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesPages from "./Notes.client";

export default async function Notes() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, query: "" }],
    queryFn: () => fetchNotes(1, ""),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesPages />
      </HydrationBoundary>
    </div>
  );
}
