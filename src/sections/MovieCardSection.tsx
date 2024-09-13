import styled from "styled-components";
import card1 from "../assets/graphics/movie1.webp";
import card2 from "../assets/graphics/movie2.webp";
import card3 from "../assets/graphics/movie3.webp";
import card4 from "../assets/graphics/movie4.webp";
import card5 from "../assets/graphics/movie5.webp";
import card6 from "../assets/graphics/movie6.webp";
import card7 from "../assets/graphics/movie7.webp";
import card8 from "../assets/graphics/movie8.webp";
import card9 from "../assets/graphics/movie9.webp";

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
`

const MovieCard = styled.div<{ $url?: string}>`
    width: 9rem;
    height: 12rem;
    border-radius: 0.5rem;
    transition: all 0.5s cubic-bezier(0.33, 0, 0, 1);
    background-image: url(${props => props.$url});
    background-size: cover;
    background-position: center;

    &:hover {
        cursor: pointer;
        scale: 1.03;
    }
    
`

const NumberSpan = styled.span<{ $id?: number}>`
    line-height: 1;
    display: inline-block;
    height: 1em;
    position: relative;
    font-weight: 700;
    color: rgb(65, 65, 65);
    -webkit-text-stroke: 0.15rem rgb(255, 255, 255);
    text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);

    &::before {
        content: "${props => props.$id}";
        font-weight: 900;
        color: rgb(65, 65, 65);
        text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
        font-size: 5rem;
        bottom: -6rem;
        left: -0.625rem;
        position: relative;
        -webkit-text-fill-color: rgb(0, 0, 0);
    }
`

const MovieCardSection = () => {
  return (
    <MovieCardWrapper>
      <MovieCard
        $url={card1}
        >
        <NumberSpan 
          $id={1}
        />
      </MovieCard>
      <MovieCard
        $url={card2}
        >
        <NumberSpan 
          $id={2}
        />
      </MovieCard>
      <MovieCard
        $url={card3}
        >
        <NumberSpan 
          $id={3}
        />
      </MovieCard>
      <MovieCard
        $url={card4}
        >
        <NumberSpan 
          $id={4}
        />
      </MovieCard>
      <MovieCard
        $url={card5}
        >
        <NumberSpan 
          $id={5}
        />
      </MovieCard>
      <MovieCard
        $url={card6}
        >
        <NumberSpan 
          $id={6}
        />
      </MovieCard>
      <MovieCard
        $url={card7}
        >
        <NumberSpan 
          $id={7}
        />
      </MovieCard>
      <MovieCard
        $url={card8}
        >
        <NumberSpan 
          $id={8}
        />
      </MovieCard>
      <MovieCard
        $url={card9}
        >
        <NumberSpan 
          $id={9}
        />
      </MovieCard>
    </MovieCardWrapper>
  )
}

export default MovieCardSection
