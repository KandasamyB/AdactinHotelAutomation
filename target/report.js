$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/TC1_LoginPage.feature");
formatter.feature({
  "name": "verifying Adactinhotel Login Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel Login details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel Login details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel Login details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should login with Enter Key \"\u003cusername\u003e\",\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel Login details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should login with Enter Key \"NirmalKumarNatesan\",\"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWithEnterKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel Login details with InValid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify after login get error message contains \"verifing contains message Invalid Login details or Your Password might have expired.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "NirmalKumar",
        "Nirmalhari"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel Login details with InValid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumar\", \"Nirmalhari\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify after login get error message contains \"verifing contains message Invalid Login details or Your Password might have expired.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.userShouldVerifyAfterLoginGetErrorMessageContains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/TC2_SearchHotel.feature");
formatter.feature({
  "name": "verifying Adactinhotel SearchHotel Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SearchHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SearchHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SearchHotel details with Mandatory Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login with Mandatory details \"\u003cLocation\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\"and\"\u003cAdult\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SearchHotel details with Mandatory Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login with Mandatory details \"Melbourne\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\"and\"2 - Two\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithMandatoryDetailsAnd(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SearchHotel details invalid date Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login  with Invalid date \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify  search get Error message  \"CheckIn Date shall be before than Check-Out Date\" ,\"Check-Out Date shall be after than Check-In Date\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2023",
        "22-06-2022",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SearchHotel details invalid date Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login  with Invalid date \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2023\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithInvalidDateAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify  search get Error message  \"CheckIn Date shall be before than Check-Out Date\" ,\"Check-Out Date shall be after than Check-In Date\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySearchGetErrorMessage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SearchHotel details with  Valid location alone",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\" alone",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SearchHotel details with  Valid location alone",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Search the Hotel after Sucessfully Login with \"Melbourne\" alone",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAlone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/TC3_SelectHotel.feature");
formatter.feature({
  "name": "verifying Adactinhotel SelectHotel Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SelectHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SelectHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelStep.userShouldSelectTheHotelAndContinueAfterSuccessfullySearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStep.userShouldAfterVerifySuccessfullySelectHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel SelectHotel details with InValid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should without Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.step({
  "name": "User should  verify after  continue get Error message \"Please Select a Hotel\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel SelectHotel details with InValid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should without Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelStep.userShouldWithoutSelectTheHotelAndContinueAfterSuccessfullySearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  verify after  continue get Error message \"Please Select a Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStep.userShouldVerifyAfterContinueGetErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/TC4_BookingHotel.feature");
formatter.feature({
  "name": "verifying Adactinhotel BookHotel Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel BookHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Book the Hotel after successfully select hotel  using \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003caddress\u003e\" and save the generated orderId",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "creditcardtype",
        "creditcardnumber",
        "expirymonth",
        "expiryyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "VISA",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    },
    {
      "cells": [
        "American Express",
        "1234123412341234",
        "June",
        "2022",
        "142"
      ]
    },
    {
      "cells": [
        "Master Card",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    }
  ]
});
formatter.step({
  "name": "User should verify after Sucessfully Book hotel get message \"Booking Confirmation\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children",
        "firstname",
        "lastname",
        "address"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three",
        "Kandasamy",
        "Bala",
        "1/16,sattur"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel BookHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelStep.userShouldSelectTheHotelAndContinueAfterSuccessfullySearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStep.userShouldAfterVerifySuccessfullySelectHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Book the Hotel after successfully select hotel  using \"Kandasamy\",\"Bala\",\"1/16,sattur\" and save the generated orderId",
  "rows": [
    {
      "cells": [
        "creditcardtype",
        "creditcardnumber",
        "expirymonth",
        "expiryyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "VISA",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    },
    {
      "cells": [
        "American Express",
        "1234123412341234",
        "June",
        "2022",
        "142"
      ]
    },
    {
      "cells": [
        "Master Card",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookingHotelStep.userShouldBookTheHotelAfterSuccessfullySelectHotelUsingAndSaveTheGeneratedOrderId(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify after Sucessfully Book hotel get message \"Booking Confirmation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingHotelStep.userShouldVerifyAfterSucessfullyBookHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel BookHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Should Book the Hotel after successfully without filling details",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify Book hotel get error message \"Please Enter your First Name\",\"Please Enter you Last Name\",\"Please Enter you Last Name\",\"Please Enter your 16 Digit Credit Card Number\",\"Please Select your Credit Card Type\",\"Please Select your Credit Card Expiry Month\"and\"  Please Enter your Credit Card CVV Number\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel BookHotel details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelStep.userShouldSelectTheHotelAndContinueAfterSuccessfullySearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStep.userShouldAfterVerifySuccessfullySelectHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Book the Hotel after successfully without filling details",
  "keyword": "And "
});
formatter.match({
  "location": "BookingHotelStep.userShouldBookTheHotelAfterSuccessfullyWithoutFillingDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify Book hotel get error message \"Please Enter your First Name\",\"Please Enter you Last Name\",\"Please Enter you Last Name\",\"Please Enter your 16 Digit Credit Card Number\",\"Please Select your Credit Card Type\",\"Please Select your Credit Card Expiry Month\"and\"  Please Enter your Credit Card CVV Number\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingHotelStep.userShouldAfterVerifyBookHotelGetErrorMessageAnd(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/TC5_CancelBooking.feature");
formatter.feature({
  "name": "verifying Adactinhotel Cancel Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel cancelpage details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"\u003cLocation\u003e\",\"\u003cHotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNumberofrooms\u003e\",\"\u003cCheckindate\u003e\",\"\u003cCheckoutdate\u003e\",\"\u003cAdult\u003e\"and\"\u003cChildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should Book the Hotel after successfully select hotel  using \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003caddress\u003e\" and save the generated orderId",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "creditcardtype",
        "creditcardnumber",
        "expirymonth",
        "expiryyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "VISA",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    },
    {
      "cells": [
        "American Express",
        "1234123412341234",
        "June",
        "2022",
        "142"
      ]
    },
    {
      "cells": [
        "Master Card",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    }
  ]
});
formatter.step({
  "name": "User should verify after Sucessfully Book hotel get message \"Booking Confirmation\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should cancel generated order id after booking confirmation",
  "keyword": "And "
});
formatter.step({
  "name": "User should verify cancel message after cancelling \"The booking has been cancelled.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotel",
        "Roomtype",
        "Numberofrooms",
        "Checkindate",
        "Checkoutdate",
        "Adult",
        "Children",
        "firstname",
        "lastname",
        "address"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "Melbourne",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "21-06-2022",
        "22-06-2022",
        "2 - Two",
        "3 - Three",
        "Kandasamy",
        "Bala",
        "1/16,sattur"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel cancelpage details with Valid  Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should  Search the Hotel after Sucessfully Login with \"Melbourne\",\"Hotel Cornice\",\"Double\",\"2 - Two\",\"21-06-2022\",\"22-06-2022\",\"2 - Two\"and\"3 - Three\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotelStep.userShouldSearchTheHotelAfterSucessfullyLoginWithAnd(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully search message with \"Select Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStep.userShouldAfterVerifySuccessfullySearchMessageWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Select the Hotel and continue After successfully search",
  "keyword": "And "
});
formatter.match({
  "location": "SelectHotelStep.userShouldSelectTheHotelAndContinueAfterSuccessfullySearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should after verify successfully select hotel get message \"Book A Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStep.userShouldAfterVerifySuccessfullySelectHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Book the Hotel after successfully select hotel  using \"Kandasamy\",\"Bala\",\"1/16,sattur\" and save the generated orderId",
  "rows": [
    {
      "cells": [
        "creditcardtype",
        "creditcardnumber",
        "expirymonth",
        "expiryyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "VISA",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    },
    {
      "cells": [
        "American Express",
        "1234123412341234",
        "June",
        "2022",
        "142"
      ]
    },
    {
      "cells": [
        "Master Card",
        "1234123412341234",
        "June",
        "2022",
        "122"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookingHotelStep.userShouldBookTheHotelAfterSuccessfullySelectHotelUsingAndSaveTheGeneratedOrderId(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify after Sucessfully Book hotel get message \"Booking Confirmation\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingHotelStep.userShouldVerifyAfterSucessfullyBookHotelGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should cancel generated order id after booking confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "CancelBookingStep.userShouldCancelGeneratedOrderIdAfterBookingConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify cancel message after cancelling \"The booking has been cancelled.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CancelBookingStep.userShouldVerifyCancelMessageAfterCancelling(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactinhotel Cancelpage details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should Login  with \"\u003cusername\u003e\", \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should cancel existing order \"\u003corderID\u003e\" after sucessfully login",
  "keyword": "And "
});
formatter.step({
  "name": "User should verify cancel message after cancelling \"The booking has been cancelled.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "orderID"
      ]
    },
    {
      "cells": [
        "NirmalKumarNatesan",
        "Nirmalhari@1",
        "O1347USDD7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactinhotel Cancelpage details with Valid Credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactinhotel Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.userIsOnTheAdactinhotelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Login  with \"NirmalKumarNatesan\", \"Nirmalhari@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.userShouldLoginWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify successfully login message \"Hello NirmalkumarNatesan!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userShouldVerifySuccessfullyLoginMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should cancel existing order \"O1347USDD7\" after sucessfully login",
  "keyword": "And "
});
formatter.match({
  "location": "CancelBookingStep.userShouldCancelExistingOrderAfterSucessfullyLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should verify cancel message after cancelling \"The booking has been cancelled.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CancelBookingStep.userShouldVerifyCancelMessageAfterCancelling(String)"
});
formatter.result({
  "status": "passed"
});
});