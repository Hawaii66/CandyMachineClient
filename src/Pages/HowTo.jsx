import React from 'react'

function HowTo() {
    return (
        <div>
            <h1>Hur Gör Man?</h1>
            <ol>
                <li>Börja med att scana QR-koden på Godis Automaten. För att skana koden följ denna guide. https://support.apple.com/sv-se/HT208843</li>
                <li>QR-Koden kommera att ta dig till en hemsida med godisen och ett pris på. För att betalningen ska ske säkert använder jag mig av PayPal</li>
                <li>Tryck på den gula knappen för att betala med PayPal.</li>
                <li>När betalningen är klar kommer du att tas tillbaka till den godis sidan. Rör inte telefonen och vänta på att sidan uppdateras</li>
                <li>När det står: Perfekt, betalningen gick igenom kan du stänga telefonen</li>
                <li>Min server har tagit emot betalningen och skickar nu instruktionerna till Godis Automaten. Detta ska bara ta några sekunder.</li>
                <li>Se på när din godisen sakta snurrar ut och fånga den under QR-koderna på Godis Maskinen</li>
                <li>Om något av stegen inte fungerar gå till: https://candymachine.netlify.app/About för att kontakta mig :/</li>
                <li>Om du vill tycka till eller se en annan godis gå till samma länk och kontakta mig :D</li>
            </ol>
        </div>
    )
}

export default HowTo
