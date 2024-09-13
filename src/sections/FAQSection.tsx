import styled from "styled-components"
import Question from "../components/Question"

const FAQWrapper = styled.div`
    padding: 3rem 10rem;

    & h2 {
        color: white;
    }

    @media (max-width: 800px){
        padding: 3rem 3rem;
    }
`

const QuestionsWrapper = styled.div`
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
`

const FAQSection = () => {
  return (
    <FAQWrapper>
      <h2>Mehr Gründe für eine Mitgliedschaft</h2>
      <QuestionsWrapper>
        <Question
            Question="Welche Inhalte kann ich auf Netflix ansehen?"
            FirstParagraph="Netflix bietet eine riesige Auswahl an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix Originalen und mehr."
            SecondParagraph="Schauen Sie, so viel Sie möchten – so oft und wann immer Sie wollen."
        />
        <Question
            Question="Was ist Netflix?"
            FirstParagraph="Netflix ist ein Streaming-Dienst, dessen Mitglieder ein vielseitiges Angebot von preisgekrönten Serien, Filmen, Dokumentationen und mehr auf Tausenden mit dem Internet verbundenen Geräten nutzen können."
            SecondParagraph="Sie können jederzeit und überall so viele Inhalte ansehen wie Sie möchten – für einen geringen monatlichen Pauschalbetrag. Es gibt immer etwas Neues zu entdecken und jede Woche kommen weitere Serien und Filme dazu."
        />
        <Question
            Question="Wie viel kostet Netflix?"
            FirstParagraph="Für einen monatlichen Pauschalbetrag können Sie Netflix auf Ihrem Smartphone, Tablet, Smart-TV, Laptop oder Streaming-Gerät genießen. Die Abos kosten 4,99&nbsp;€ bis 19,99&nbsp;€ pro Monat. Keine Extrakosten, keine Verträge."
        />
        <Question
            Question="Wo kann ich Inhalte ansehen?"
            FirstParagraph="Sie können unsere Inhalte überall und jederzeit ansehen. Loggen Sie sich mit Ihrem Netflix-Konto auf der Website unter netflix.com ein, um direkt auf Ihrem Computer Inhalte anzusehen. Sie können sich auch auf einem Gerät mit Internetverbindung einloggen, auf dem die Netflix-App installiert ist, zum Beispiel auf Smart-TVs, Smartphones, Tablets, Streaming-Playern und Spielkonsolen."
            SecondParagraph="Darüber hinaus können Sie Ihre Lieblingsserien auch über die iOS- oder Android-App herunterladen. Mit Downloads können Sie Netflix auch ohne Internetverbindung überall genießen. Nehmen Sie Netflix einfach überall hin mit."
        />
        <Question
            Question="Wie kann ich kündigen?"
            FirstParagraph="Mit Netflix sind Sie flexibel. Bei uns gibt es keine lästige Vertragsbindung oder Verpflichtung. Sie können Ihr Konto ganz leicht mit nur zwei Klicks online kündigen. Es gibt keine Kündigungsgebühren, die Mitgliedschaft kann jederzeit begonnen oder angehalten werden."
        />
        <Question
            Question="Ist Netflix gut für Kinder?"
            FirstParagraph="Der Kids-Bereich von Netflix ist bereits in Ihrer Mitgliedschaft inbegriffen und gibt Eltern die Kontrolle über das Unterhaltungserlebnis ihrer Kinder, damit diese familienfreundliche Serien und Filme in einem eigens auf ihre Bedürfnisse abgestimmten Bereich genießen können."
            SecondParagraph="Kinderprofile sind mit einer PIN-geschützten Kindersicherung versehen, mit der Sie die Altersfreigabe von Titeln einschränken können, die angezeigt werden, und bestimmte Titel für Kinder sperren können."
        />
      </QuestionsWrapper>
    </FAQWrapper>
  )
}

export default FAQSection
