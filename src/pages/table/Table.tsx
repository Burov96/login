import  { useEffect, useState } from "react";
import "./table.scss";
import { Loading } from "../../components/Loading";
import { ErrorLottie } from "../../components/Error";

interface Character {
  name: string;
  mass: string;
  height: string;
  hair_color: string;
  skin_color: string;
  url: string;
}

interface ApiResponse {
  results: Character[];
}

export default function Table(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gotError, setGotError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://swapi.dev/api/people");
        if (!response.ok) {
          setGotError(true)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setGotError(true)
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);



  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  if (gotError) {
    return (
      <div className="error">
        <ErrorLottie />
        Error: {error}
      </div>
    );
  }
  return (
    <div className="table-container">
      <table className="character-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mass</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.url}>
              <td>{character.name}</td>
              <td>{character.mass}</td>
              <td>{character.height}</td>
              <td>{character.hair_color}</td>
              <td>{character.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
