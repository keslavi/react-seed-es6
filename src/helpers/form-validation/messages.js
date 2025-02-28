export const validationMsg = {
  Currency: "Invalid, value is not currency",

  CurrencyNoDec: "Invalid ! enter a currency value without cents",

  numeric2Decimal: "Enter only number having maximum two decimal places",

  numeric3Decimal: "Enter only number having maximum three decimal places",

  integer: "Enter only non decimal numbers",

  SSN: "Invalid SSN ! It must be 9 digits.",

  SameTIN:
    "CMT ID entered in CMT ID Same TIN field is either invalid or the TINs are different. Please correct and re-submit or remove the Shared TIN Flag.",

  UnspecifiedSSN: "SSN Type is not specified for this TaxID type",

  SelectTaxIDTypeBeforeTaxID:
    "Please select TaxID Type first before entering Tax ID.",

  TaxIDLen: "Tax ID must be 9 digits.",

  //Commented below error message and added new for story TWSPTSCRUM-4004-IIP Client PI4-  UI ation error message change for Fake TIN

  //TaxID: "Invalid Tax Id, please enter proper Tax Id or to proceed further wipe out Tax ID.",

  TaxID: "Invalid Tax ID. Please enter proper Tax ID or leave it blank.",

  UnspecifiedTaxIDType: "Tax Type is not specified for this TaxID type",

  Integer: "Enter only numbers",

  Num: "Enter only numbers",

  AlphaNum: "Invalid Alpha-Numeric",

  SpecialChar: "Special characters not allowed",

  Date: "Invalid Date",

  DateFormat: "Invalid Date Format. Please Enter date in MM/DD/YYYY format.",

  DateFormatValuationDt:
    "Invalid Date Format. Please Enter date in MM/DD format.",

  DateRange:
    "Invalid Day, Month, or Year range detected. Please correct and submit again.",

  MonthRange: "Month must be between 1 and 12.",

  DayRange: "Day must be between 1 and 31.",

  EnterValue: "Please enter a value.",

  PhoneNum: "Invalid Phone Number !",

  DOBmorethanDOD: "Date of Birth cannot be greater than  Date of Death.",

  DODLessthanDOB: "Date of Death cannot be prior to Date of Birth.",

  PCentValue: "Please enter a valid percentage value!",

  EmailId: "Invalid E-mail ID !",

  FutureDate: "Cannot be a future date !",

  Alphabet: "Invalid Alphabet !",

  InvalidInputFormat: "Invalid input",

  InvalidPacePartyName: "Invalid PACE/MLT Party Name",

  PrimaryOwnerTaxIDDelete:
    "Party Tax ID cannot be removed because Party has PACE Roles.",

  DateGreaterThanNineteenHundreed: "Year must be greater than 1900.",

  SelectReasonForRisk: "Select reason for risk.",

  EnterRiskamount: "Enter a value for risk amount.",

  EnterClientAtRiskLevel: "Select client At risk Level.",

  EnterBANAMLEmployee: "Please check BANA/ML Employee in Party Demographics",

  VerifyCountryOfLegalFormation:
    "PHC COUNTRY EXEMPTION is not valid for this party since Country of Legal formation is not in the PHC country exemption list ",

  EnterCliForTaxFilAttFrstID:
    "Please Enter the Client Foreign Tax Filing Attestation First ID",

  EnterCliForTaxFilAttDate:
    "Please Enter the Tax Attestation / Tax Exemption Date",

  EnterSubTypes: "Please add comments for all subtypes.",

  CreatepartyCancelButtonMessage:
    "Party create was cancelled. Please navigate to any other function from the CMT Menu.",

  PrimaryOwnerTaxIDDeleteForMLT:
    "Party Tax ID cannot be removed because party has MLT roles.",

  PrimaryOwnerTaxDelMLTPace:
    "Since party is playing primary owner role on one or more PACE/MLT account , you cannot change following fields to blank <br/>Tax ID<br/>Tax ID Type<br/>TIN/ITIN Application Type<br/>TIN/ITIN Application Date<br/>or IRS tax payer status.",

  //ExemptionDocumentFirstID: "Please Enter a value for Exemption Document First ID ",

  ExemptionDate: "Please Enter a value for GCS Country Exemption Date",

  //Added for CMT-CED May2017 Release to make some fields mandatory on CEDOverlapPopup

  EnterAlternateName: "Please Enter a value for Alternate Name",

  EnterCMTTypeDescription:
    "Please Select a value for CMT Non-Individual Type. It should not be null when it has current value",

  EnterCEDTypeDescription: "Please Select a value for CED Non-Individual Type",

  EnterLegalCodeOrDescription:
    "Please Select a value for Legal Code/Description",

  EnterFirstName: "First Name Cannot be Blank",

  EnterLastName: "Last Name Cannot be Blank",

  CitizenshipStatus: "CitizenshipStatus cannot be Blank",

  CountryOfResidence: "CountryOfResidence cannot be Blank",

  CountryOfCitizenship: "CountryOfCitizenship cannot be Blank",

  LegalCode: "LegalCode cannot be Blank",

  LegalNAICSCode: "LegalNAICSCode cannot be Blank",

  RISKNAICSCode: "RISKNAICSCode cannot be Blank",

  ParentGCI: "ParentGCI cannot be Blank",

  ParentGCIName: "ParentGCIName cannot be Blank",

  CEDClientOwner: "CEDClientOwner cannot be Blank",

  //CommonErrorDescription: "Please Select CED Non-Individual Type" + "<br>" + "Please Select Legal Code/Description" + "<br>" + "Please Select Legal NAICS Code/Description"

  EnterLegalNAICSCode: "Please Select Legal NAICS Code/Description",

  EnterNonIndividualName: "Non-Individual name Can't be blank",

  EnterNonIndividualType: "CMT Non-Individual Type  Can't be blank",

  EnterTaxID: "TaxID  Can't be blank",

  EnterTaxIDType: "TaxID Type Can't be blank",

  EnterDOB: "Date Of Birth Can't be blank",

  CitizenshipandDualCitizenship:
    "Country of Citizenship cannot be same as Country of Dual Citizenship",

  Reason: "Please Select Reason for Edit",

  NoReasonRequired:
    "Reason is required only if Phone Number/Country Code is changed",

  CompareTINandPseudoTIN:
    "TaxID cannot be same as Pseudo TIN value of the party",

  AutoApproved_Comments:
    "Comments are not required for auto-approve fields and will be removed when submitted.",

  CMTNonIndTypeUpdate:
    "Legal Code update is required when updating CMT Non-Ind Type.",

  PrimaryOwner:
    "Primary Owner can only be set for a party if it is in a KYC Eligible Role which are 05 Estate, 06 IRA, 44 Principal Owner 60 Trust or 95 Plan.",

  NonIndividualSubtypeRequired: "CMT Non-Individual Type cannot be blank.",

  RevocationOfTrustRequired:
    "Revocability of Trust cannot be blank for a Trust.",

  PrimaryOwner_ForIndividual:
    "Individual Party cannot be selected as Primary owner for account types as Trusts and Agent for",

  SameTINEqualtoPartyinContext:
    "Same TIN field value cannot not be same as Party in context.",

  DrpLegalExpiredate:
    "Please Select Does the Governing Documentation have an expiration date?",

  EnterLegalExpDat: "Legal Expiration date Cannot be Blank ",

  EnterCoveredFundReasonCode: "Covered Fund Reason Code is required.",

  LongTitle: "Invalid input found for Account Long Title",

  WriteDownMethod:
    "Change in write down method may result in trades being reposted to calculate proper gains & losses",

  Statement:
    "Please review the updates to Account foundational fields as it impacts Statements",

  FeeArrangement: `Please note this account’s fee arrangement may be set systematically to “Non Standard” on click of “Save” if current fee schedules are not compatible with the new foundational fields.`,
};

export default validationMsg;
