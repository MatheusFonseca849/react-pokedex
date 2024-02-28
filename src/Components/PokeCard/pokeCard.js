import { styled } from "styled-components";

export const StyledPokemonCard = styled.li`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--gap-card);
    border: 2px solid var(--color-grey-300);
    background-color: var(--color-grey-500);
    border-radius: var(--radius-card);

    img{

        width: 96px;
        height: 96px;
        background-color: var(--color-grey-600);
        border-radius: var(--radius-card-img);

    }

    .pokeInfo{

        display: flex;
        gap: 8px;

        span, h2{

            font-size: var(--font-size-3);
            font-weight: 700;
            color: var(--color-grey-100);

        }

    }
`