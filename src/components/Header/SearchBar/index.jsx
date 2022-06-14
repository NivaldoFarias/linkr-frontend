import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input';


const StyledInput = styled.input`
  background-color: white;
  height: 45px;
  border-radius: 8px;
  width: 100%;
  margin: 10px;

  @media only screen and (min-width: 500px) {
    max-width: 300px;
    margin: none;
  }
`;

export default function SearchBar() {
  const [userName, setUserName] = useState(''); 
  const [users] = useUsers(userName);
  return (
    <div>
      <DebounceInput
        required
        type='text'
        value={userName}
        placeholder='Search for people'
        onChange={(e) => setUserName(e.target.value)}
        element={StyledInput}
        minLength={3}
        debounceTimeout={300}/>
      <AiOutlineSearch/>
      <ul>
        {users}
      </ul>
    </div>
  );
}
