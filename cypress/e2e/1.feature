Feature: Default

	
	@O2CAPNM-1098
	Scenario: Cypress integration with Jira+XRAY
		Given I am on empty home page
		    When I type in url and submit
		    Then I should be redirected to the board detail