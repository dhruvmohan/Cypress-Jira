Feature: Default

	Scenario: Cypress integration with Jira+XRAY
		Given Die neue APN-Anwendung ist in der IU-Umgebung verfügbar
			When der Benutzer per Mouseover auf den Reiter Kundenverwaltung wechselt oder klickt auf den Link Kundenverwaltung
			Then Ein weiteres Menü öffnet sich mit folgenden Auswahlmöglichkeiten: Eingegangene Anmeldungen, Detailsuche Anmeldungen, Entscheidungsverfahren, Vertragsverwaltung, Belegungsplan
            When der Benutzer klickt auf den Link Belegungsplan
            Then der Belegungsplan Suche wird auf der Weboberfläche angezeigt

         