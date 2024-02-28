import { styled } from "styled-components";

export const StyledPokemonList = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{

     font-size: 2rem;
     color: var(--color-grey-300);
     margin: 64px 0;

    }

   ul{

        display: flex;
        flex-direction: column;
        gap: var(--gap-default);
        width: 100%;
        padding: 0 24px;
     

   }

@media(min-width: 620px){

     ul{

          width: 90%;

     }

}

@media(min-width: 920px){

     ul{

          width: 70%;

     }

}
`