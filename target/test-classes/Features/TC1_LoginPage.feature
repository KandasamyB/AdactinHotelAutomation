@login
Feature: Verifying Adactinhotel Login Details

  Background: User is Logged In
    Given User is on the Adactinhotel Page

  Scenario Outline: Verifying Adactinhotel Login details with Valid Credential
    When User should Login  with "<username>", "<password>"
    Then User should verify successfully login message "Hello NirmalkumarNatesan!"

    Examples: 
      | username           | password     |
      | NirmalKumarNatesan | Nirmalhari@1 |

  Scenario Outline: Verifying Adactinhotel Login details with Valid Credential
    When User should login with Enter Key "<username>","<password>"
    Then User should verify successfully login message "Hello NirmalkumarNatesan!"

    Examples: 
      | username           | password     |
      | NirmalKumarNatesan | Nirmalhari@1 |

  Scenario Outline: Verifying Adactinhotel Login details with InValid Credential
    When User should Login  with "<username>", "<password>"
    Then User should verify after login get error message contains "Invalid Login details or Your Password might have expired."

    Examples: 
      | username    | password   |
      | NirmalKumar | Nirmalhari |
