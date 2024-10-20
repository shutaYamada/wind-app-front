import Footer from "../components/Footer";
import WindNote from "../components/WindNote";
import { useNotes } from "../queries/NoteQuery";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import RequireAuth from "../components/RequireAuth";
import { useGetUser } from "../queries/UserQuery";

const WindNoteList = () => {
  const { data: notes, isLoading, isFetching } = useNotes();
  const { data: user } = useGetUser();
  return (
    <RequireAuth>
      <NoteHeader />
      <HeaderTab />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {notes?.map((note) => (
              <WindNote
                key={note.id}
                note={note}
                user={user}
                isFetching={isFetching}
              />
            ))}
          </>
        )}
      </div>
      <Footer />
    </RequireAuth>
  );
};

export default WindNoteList;
