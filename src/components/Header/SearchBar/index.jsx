import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input';
import useUsers from './hooks/useUsers';
import { StyledDiv, StyledInput, StyledList } from './styles';

export default function SearchBar() {
  const [userName, setUserName] = useState(''); 
  const [users] = useUsers(userName);
  return (
    <StyledDiv>
      <DebounceInput
        required
        type='text'
        value={userName}
        placeholder='Search for people'
        onChange={(e) => setUserName(e.target.value)}
        element={StyledInput}
        minLength={3}
        debounceTimeout={300}/>
      <AiOutlineSearch className="magnifying-glass"/>
      {users.length > 0 && userName.length > 0 && <StyledList>{users}</StyledList>}
    </StyledDiv>
  );
}
