import styled from "styled-components"

const LinkUl = styled.ul`
    color: white;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem 10rem;

    @media (max-width: 591px) {
        margin-top: 5rem;
        padding: 2rem 5rem;
    }

    @media (max-width: 800px) {
        text-align: center;
    }
`

const LinkListItem = styled.li`
    list-style-type: none;
    flex: 0 0 30%;
    margin-top: 0.75rem;
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-weight: 500;
    padding: 0 .5rem 0 0;
    word-break: break-word;
    position: relative;

    @media (max-width: 830px) {
      flex: 0 0 48%;
    }

    @media (max-width: 720px) {
      flex: 0 0 100%;
    }

    & a:hover {
      cursor: pointer
    }
`

const ListLink = styled.a`
  position: relative;
  
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: transparent;
    position: absolute;
    left: -15px;
    top: 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease; /* Smooth transition for the hover effect */
  }

  &:hover::after {
    background-color: rgb(229, 9, 20); /* The hover effect for the ::after element */
  }
`;




const LinkSection = () => {
  const links = [
    "Häufig gestellte Fragen (FAQ)",
    "Mitgliedschaft kündigen",
    "Hilfe-Center",
    "Konto",
    "Medien-Center",
    "Anlegerbeziehungen",
    "Karriere",
    "Netflix Shop",
    "Geschenkkarten einlösen",
    "Geschenkkarten kaufen",
    "So können Sie Netflix ansehen",
    "Nutzungsbedingungen",
    "Datenschutz",
    "Cookie-Einstellungen",
    "Impressum",
    "Kontakt",
    "Geschwindigkeitstest",
    "Gesetzliche Garantie",
    "Rechtliche Hinweise",
    "Nur auf Netflix",
    "Wahlmöglichkeiten für Werbung"
  ];

  return (
    <LinkUl>
      {links.map((link, index) => (
        <LinkListItem key={index}>
          <ListLink>{link}</ListLink>
        </LinkListItem>
      ))}
    </LinkUl>
  );
}

export default LinkSection;

