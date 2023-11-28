import { ChangeEvent } from "react";

type SearchProps = {
  setSearchTerm: (term: string) => void;
};

export default function Search({ setSearchTerm }: SearchProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      className="input-action"
      type="text"
      placeholder="Pesquisar tarefas..."
      onChange={handleSearchChange}
    />
  );
}
