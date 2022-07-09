@SearchHotel
Feature: Verifying Adactinhotel SearchHotel Details

  Background: User on login page
    Given User is on the Adactinhotel Page
    When User should Login  with "NirmalKumarNatesan", "Nirmalhari@1"
      #| username           | password     |
      #| NirmalKumarNatesan | Nirmalhari@1 |
    Then User should verify successfully login message "Hello NirmalkumarNatesan!"

  Scenario Outline: Verifying Adactinhotel SearchHotel details with Valid  Credential
    And User should  Search the Hotel after Sucessfully Login with "<Location>","<Hotel>","<Roomtype>","<Numberofrooms>","<Checkindate>","<Checkoutdate>","<Adult>"and"<Children>"
    Then User should after verify successfully search message with "Select Hotel"

    Examples: 
      | Location  | Hotel         | Roomtype | Numberofrooms | Checkindate | Checkoutdate | Adult   | Children  |
      | Melbourne | Hotel Cornice | Double   | 2 - Two       | 05/07/2022  | 07/07/2022   | 2 - Two | 3 - Three |

  Scenario Outline: Verifying Adactinhotel SearchHotel details with Mandatory Valid Credential
    And User should Search the Hotel after Sucessfully Login with Mandatory details "<Location>","<Numberofrooms>","<Checkindate>","<Checkoutdate>"and"<Adult>"
    Then User should after verify successfully search message with "Select Hotel"

    Examples: 
      | username           | password     | Location  | Numberofrooms | Checkindate | Checkoutdate | Adult   |
      | NirmalKumarNatesan | Nirmalhari@1 | Melbourne | 2 - Two       | 05/07/2022  | 07/07/2022   | 2 - Two |

  Scenario Outline: Verifying Adactinhotel SearchHotel details invalid date Credential
    And User should  Search the Hotel after Sucessfully Login with "<Location>","<Hotel>","<Roomtype>","<Numberofrooms>","<Checkindate>","<Checkoutdate>","<Adult>"and"<Children>"
    Then User should after verify  search get Error message  "Check-In Date shall be before than Check-Out Date" ,"Check-Out Date shall be after than Check-In Date"

    Examples: 
      | username           | password     | Location  | Hotel         | Roomtype | Numberofrooms | Checkindate | Checkoutdate | Adult   | Children  |
      | NirmalKumarNatesan | Nirmalhari@1 | Melbourne | Hotel Cornice | Double   | 2 - Two       | 09/07/2022  | 07/07/2022   | 2 - Two | 3 - Three |

  Scenario Outline: Verifying Adactinhotel SearchHotel details with  Valid location alone
    And User should Search the Hotel without select details after Sucessfully Login
    Then User should after verify  search get Error message "Please Select a Location"

    Examples: 
      | username           | password     | Location | Hotel | Roomtype | Numberofrooms | Checkindate | Checkoutdate | Adult | Children |
      | NirmalKumarNatesan | Nirmalhari@1 |          |       |          |               |             |              |       |          |
