import React from "react";
import useGenres from "../hooks/useGenres";
import { list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
