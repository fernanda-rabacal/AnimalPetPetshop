import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Item = styled(NavLink)`
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors["base-card"]};
  margin: 10px;
  padding: 10px;
  width: 16rem;
  height: 25rem;
  border-radius: 6px;
  flex: none;
  cursor: pointer;
  
  &:hover {
    transition: 0.2s;
    box-shadow: 0 0 5px gray;
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 90%;
    object-fit: cover;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: ${({theme}) => theme.colors.headline};
    font-size: 1.2rem;
    font-weight: 700;
    margin: 15px 0;
  }
`