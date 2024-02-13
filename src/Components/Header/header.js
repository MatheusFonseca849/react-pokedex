import { styled } from "styled-components";

export const StyledHeader = styled.header`

display: flex;
flex-direction: column;
align-items: center;
gap: var(--gap-default);
padding: var(--padding-header);
border-bottom: 1px solid black;

.imgContainer{

    width: fit-content;
    height: fit-content;
    padding: 4px;

        img{

            width: 125px;
            height: 54px;

        }

}

.searchForm{

    display: flex;
    gap: var(--gap-form);

    input{

        padding: var(--padding-input);
        border: 1px solid var(--color-grey-800);
        border-radius: var(--radius-default);
        background-color: var(--color-grey-950);
        width: 250px;

    }

    button{

        padding: var(--padding-button);
        background-color: transparent;
        border: 1px solid var(--color-grey-800);

    }

}

.navButtonContainer{

    display: flex;
    gap: var(--gap-button-container);

    button{

        padding: var(--padding-button);
        border-radius: var(--radius-default);
        background-color: var(--color-grey-950);

        .buttonIcon{

            color: var(--color-grey-300);
            width: var(--button-icon-size);
            height: var(--button-icon-size);

        }
    }

}

@media(min-width: 620px) {

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}

`