// export const examplePatient = () => {
//   const jsonString = '{
//       "resourceType": "Patient",
//       "id": "57b85682-ce42-4187-a593-7864248a9484",
//       "meta": {
//           "versionId": "1",
//           "lastUpdated": "2018-05-07T13:09:24.387-04:00",
//           "tag": [
//               {
//                   "system": "https://smarthealthit.org/tags",
//                   "code": "synthea-8-2017"
//               }
//           ]
//       },
//       "text": {
//           "status": "generated",
//           "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Generated by <a href=\"https://github.com/synthetichealth/synthea\">Synthea</a>. Version identifier: 1a8d765a5375bf72f3b7a92001940d05a6f21189</div>"
//       },
//       "extension": [
//           {
//               "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
//               "valueCodeableConcept": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/v3/Race",
//                           "code": "2106-3",
//                           "display": "White"
//                       }
//                   ],
//                   "text": "race"
//               }
//           },
//           {
//               "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
//               "valueCodeableConcept": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/v3/Ethnicity",
//                           "code": "2186-5",
//                           "display": "Nonhispanic"
//                       }
//                   ],
//                   "text": "ethnicity"
//               }
//           },
//           {
//               "url": "http://hl7.org/fhir/StructureDefinition/birthPlace",
//               "valueAddress": {
//                   "city": "Greenfield Town",
//                   "state": "MA",
//                   "country": "US"
//               }
//           },
//           {
//               "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
//               "valueString": "Etta Herman"
//           },
//           {
//               "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
//               "valueCode": "M"
//           },
//           {
//               "url": "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired",
//               "valueBoolean": false
//           }
//       ],
//       "identifier": [
//           {
//               "system": "https://github.com/synthetichealth/synthea",
//               "value": "1d9df7ce-bbc6-4a9b-aaaf-28a9f191b7b8"
//           },
//           {
//               "type": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/identifier-type",
//                           "code": "SB"
//                       }
//                   ]
//               },
//               "system": "http://hl7.org/fhir/sid/us-ssn",
//               "value": "999224959"
//           },
//           {
//               "type": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/v2/0203",
//                           "code": "DL"
//                       }
//                   ]
//               },
//               "system": "urn:oid:2.16.840.1.113883.4.3.25",
//               "value": "S99930738"
//           },
//           {
//               "type": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/v2/0203",
//                           "code": "PPN"
//                       }
//                   ]
//               },
//               "value": "X79952697X"
//           },
//           {
//               "type": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/v2/0203",
//                           "code": "MR"
//                       }
//                   ]
//               },
//               "system": "http://hospital.smarthealthit.org",
//               "value": "1d9df7ce-bbc6-4a9b-aaaf-28a9f191b7b8"
//           }
//       ],
//       "name": [
//           {
//               "use": "official",
//               "family": [
//                   "Gutmann"
//               ],
//               "given": [
//                   "Ronnie"
//               ],
//               "prefix": [
//                   "Mr."
//               ]
//           }
//       ],
//       "telecom": [
//           {
//               "system": "phone",
//               "value": "555.808.5955 x8372",
//               "use": "home"
//           }
//       ],
//       "gender": "male",
//       "birthDate": "1985-06-13",
//       "address": [
//           {
//               "extension": [
//                   {
//                       "url": "http://hl7.org/fhir/StructureDefinition/geolocation",
//                       "extension": [
//                           {
//                               "url": "latitude",
//                               "valueDecimal": 41.75276706219246
//                           },
//                           {
//                               "url": "longitude",
//                               "valueDecimal": -69.99985811180113
//                           }
//                       ]
//                   }
//               ],
//               "line": [
//                   "89616 Bartell Falls",
//                   "Apt. 820"
//               ],
//               "city": "Brewster",
//               "state": "MA",
//               "postalCode": "02631",
//               "country": "US"
//           }
//       ],
//       "maritalStatus": {
//           "coding": [
//               {
//                   "system": "http://hl7.org/fhir/v3/MaritalStatus",
//                   "code": "M"
//               }
//           ],
//           "text": "M"
//       },
//       "multipleBirthBoolean": false,
//       "communication": [
//           {
//               "language": {
//                   "coding": [
//                       {
//                           "system": "http://hl7.org/fhir/ValueSet/languages",
//                           "code": "en-US",
//                           "display": "English (United States)"
//                       }
//                   ]
//               }
//           }
//       ]
//   }`;

//   return JSON.parse(jsonString);
// };

export const exampleMetadata = () => {
  // prettier-ignore
  const jsonString = '{"resourceType":"Conformance","url":"https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/api/FHIR/DSTU2/Conformance/T2r8shZlVLO.Y-R6QknaYtAB","version":"T2r8shZlVLO.Y-R6QknaYtAB","copyright":"Copyright Epic 1979-2017","status":"active","experimental":false,"date":"2018-10-29T05:12:50Z","fhirVersion":"1.0.2","acceptUnknown":"no","format":["xml","json"],"kind":"instance","id":"T2r8shZlVLO.Y-R6QknaYtAB","software":{"name":"Epic 2017","version":"8.3.0.4","releaseDate":"2017-08-05T00:00:00Z"},"rest":[{"mode":"server","security":{"cors":true,"service":[{"text":"OAuth","coding":[{"system":"http://hl7.org/fhir/ValueSet/restful-security-service","code":"OAuth","display":"OAuth"}]},{"text":"SMART-on-FHIR","coding":[{"system":"http://hl7.org/fhir/ValueSet/restful-security-service","code":"SMART-on-FHIR","display":"SMART-on-FHIR"}]},{"text":"Basic","coding":[{"system":"http://hl7.org/fhir/ValueSet/restful-security-service","code":"Basic","display":"Basic"}]}],"extension":[{"url":"http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris","extension":[{"url":"authorize","valueUri":"https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/oauth2/authorize"},{"url":"token","valueUri":"https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/oauth2/token"}]}]},"resource":[{"type":"AllergyIntolerance","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for AllergyIntolerance resources using one or more server ids (equivalent to one or more Get /AllergyIntolerance/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"patient","type":"reference","documentation":"Search for AllergyIntolerance resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for AllergyIntolerance resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Binary","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"}]},{"type":"CarePlan","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for CarePlan resources using one or more server ids (equivalent to one or more Get /CarePlan/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"patient","type":"reference","documentation":"Search for CarePlan resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for CarePlan resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Condition","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for Condition resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"_id","type":"token","documentation":"Search for Condition resources using one or more server ids (equivalent to one or more Get /Condition/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"clinicalStatus","type":"token","documentation":"Refine a search for Condition resources by clinicalStatus. By default, the search returns active Condition resources. Only clinical statuses of resolved and active are supported."},{"name":"category","type":"token","documentation":"Refine a search for Condition resources by category. Only diagnosis and health-concern categories are supported."},{"name":"subject","type":"reference","documentation":"Search for Condition resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Conformance","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"}]},{"type":"Device","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Device resources using one or more server ids (equivalent to one or more Get /Device/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"patient","type":"reference","documentation":"Search for Device resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"type","type":"token","documentation":"Refine a search for Device resources by device type."},{"name":"udi","type":"string","documentation":"Refine a search for Device resources by one or more FDA-mandated Universal Device Identifiers (UDI)."},{"name":"subject","type":"reference","documentation":"Search for Device resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"DiagnosticReport","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for DiagnosticReport resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"_id","type":"token","documentation":"Search for DiagnosticReport resources using one or more server ids (equivalent to one or more Get /DiagnosticReport/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"subject","type":"reference","documentation":"Search for DiagnosticReport resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"code","type":"token","documentation":"Refine a search for DiagnosticReport resources by LOINC code."},{"name":"date","type":"date","documentation":"Refine a search for DiagnosticReport resources by specifying a date or date range that a DiagnosticReport was resulted or recorded.  Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."}]},{"type":"DocumentReference","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for DocumentReference resources using one or more server ids (equivalent to one or more Get /DocumentReference/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"patient","type":"reference","documentation":"Search for DocumentReference resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for DocumentReference resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"period","type":"date","documentation":"Refine a search for DocumentReference resources by specifying a date or date range for the DocumentReference content. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."},{"name":"class","type":"token","documentation":"Refine a search for DocumentReference resources by document class."}]},{"type":"FamilyMemberHistory","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for FamilyMemberHistory resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for FamilyMemberHistory resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Goal","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Goal resources using one or more server ids (equivalent to one or more Get /Goal/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"category","type":"token","documentation":"Refine a search for Goal resources by category."},{"name":"patient","type":"reference","documentation":"Search for Goal resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"status","type":"token","documentation":"Refine a search for Goal resources by one or more statuses. By default, only in-progress goals are returned. Only in-progress, achieved, or cancelled statuses are supported."},{"name":"subject","type":"reference","documentation":"Search for Goal resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Immunization","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Immunization resources using one or more server ids (equivalent to one or more Get /Immunization/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"date","type":"date","documentation":"Refine a search for Immunization resources by specifying a date or date range that an Immunization was resulted or recorded.  Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."},{"name":"patient","type":"reference","documentation":"Search for Immunization resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"status","type":"token","documentation":"Refine a search for Immunization resources by one or more administration statuses. By default, given and deferred immunizations are returned. Given, deferred, deleted, and incomplete statuses are supported."},{"name":"subject","type":"reference","documentation":"Search for Immunization resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"Medication","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Medication resources using one or more server ids (equivalent to one or more Get /Medication/{ID} requests). If _id is included in your search, all other parameters are ignored."}]},{"type":"MedicationOrder","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for MedicationOrder resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"status","type":"token","documentation":"Refine a search for MedicationOrder resources by one or more statuses. By default, only medications with active statuses are returned. MedicationOrder searches support completed and discontinued statuses, but the search must also include the active status."},{"name":"_id","type":"token","documentation":"Search for MedicationOrder resources using one or more server ids (equivalent to one or more Get /MedicationOrder/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"subject","type":"reference","documentation":"Search for MedicationOrder resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."}]},{"type":"MedicationStatement","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for MedicationStatement resources for a specified patient ID."},{"name":"_id","type":"token","documentation":"Search for MedicationStatement resources using one or more server ids (equivalent to one or more Get /MedicationStatement/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"status","type":"token","documentation":"Refine a search for MedicationStatement resources by one or more statuses. By default, only  medications with active statuses are returned. \r\nMedicationStatement searches support completed and intended statuses, but the search must also include the active status."}]},{"type":"Observation","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"code","type":"token","documentation":"Refine a search for Observation resources by LOINC code."},{"name":"_id","type":"token","documentation":"Search for Observation resources using one or more server ids (equivalent to one or more Get /Observation/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"date","type":"date","documentation":"Refine a search for Observation resources by specifying a date or date range that a result- or vital sign-based Observation was resulted or recorded. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."},{"name":"patient","type":"reference","documentation":"Search for Observation resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for Observation resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"issued","type":"date","documentation":"Refine a search for smoking history Observation resources by specifying a date or date range that an Observation was recorded. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."},{"name":"category","type":"token","documentation":"Refine a search for Observation resources by category. Only laboratory, vital-signs, and social-history are supported."}]},{"type":"Patient","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Patient resources using one or more server ids (equivalent to one or more Get /Patient/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"identifier","type":"token","documentation":"Search for Patient resources by a patient\'s identifier. You can use the identifier parameter as the only parameter in a search or in conjunction with other parameters. Queries must be in the format [OID]|[ID], where [OID] is the HL7 root of the identifier type. You can find this value in the Identifier.System field of a resource.  If the query doesn\'t include an OID, the system searches over all patient identifier types."},{"name":"family","type":"string","documentation":"Search for Patient resources by family (last) name. You can use the family parameter along with the given (name) parameter to search by a patient\'s name or in conjunction with the birthdate parameter. Family name searching supports exact matching, "sounds like" matching, and patient aliases."},{"name":"given","type":"string","documentation":"Search for Patient resources by given (first) name.  You must use the given parameter along with the family (name) parameter to search by a patient\'s name. Given name searching supports both exact and "sounds like" matches.  Patient aliases and dominant name aliases (ex. Bob for Robert) are also supported."},{"name":"birthdate","type":"date","documentation":"Search for Patient resources using a date of birth in ISO format (YYYY-MM-DD). You must use this parameter with at least one other search parameter (excluding given and gender)."},{"name":"address","type":"string","documentation":"Search for Patient resources using an address string. You must use this parameter with one of the following parameters: identifier, telecom, family and given, or birthdate."},{"name":"gender","type":"token","documentation":"Search for Patient resources using the following gender codes: female, male, other, or unknown.  You must use this parameter with one of the following sets of parameters: identifier, telecom, or family and given. Setting this parameter will filter results."},{"name":"telecom","type":"string","documentation":"Search for Patient resources using a patient’s home, cell phone number, or email address.  You can use this parameter as the only parameter in a search if it is set to a phone number.  If an email address is entered, you must use this parameter with one of the following parameters: identifier, family and given, or birthdate. Queries can be formatted with or without dashes."}]},{"type":"Practitioner","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"_id","type":"token","documentation":"Search for Practitioner resources using one or more server ids (equivalent to one or more Get /Practitioner/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"address","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources by any part of an address (street, city, etc.) where a practitioner can be found/visited."},{"name":"family","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources by family (last) name. Family name searching supports both exact and "sounds like" matches."},{"name":"gender","type":"token","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources using the following gender codes: "female", "male", or "unknown"."},{"name":"given","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources by given (first) name. Given name searching supports both exact and "sounds like" matches."},{"name":"specialty","type":"token","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources by specialty in the format [code system]|[code]."},{"name":"address_city","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources using the city portion of the address at which the practitioner can be found/visited.  This parameter must be used with the address_postalcode parameter."},{"name":"address_state","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources using the state portion of the address at which the practitioner can be found/visited."},{"name":"address_postalcode","type":"string","documentation":"To activate a Practitioner resource search, you must include either the family or specialty parameter. Search for Practitioner resources using the postal code portion of the address at which the practitioner can be found/visited."}]},{"type":"Procedure","readHistory":false,"updateCreate":false,"conditionalCreate":false,"conditionalUpdate":false,"conditionalDelete":"not-supported","interaction":[{"code":"read"},{"code":"search-type"}],"searchParam":[{"name":"patient","type":"reference","documentation":"Search for Procedure resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"subject","type":"reference","documentation":"Search for Procedure resources for a specified patient ID. You can use “patient” or “subject” equivalently, but they cannot be used at the same time for different references."},{"name":"_id","type":"token","documentation":"Search for Procedure resources using one or more server ids (equivalent to one or more Get /Procedure/{ID} requests). If _id is included in your search, all other parameters are ignored."},{"name":"date","type":"date","documentation":"Refine a search for Procedure resources by specifying a date or date range that a Procedure was resulted. Enter dates in ISO format (YYYY[-MM[-DD[THH:MM[:SS][TZ]]]]).  Local server time is assumed if time zone information is not included."}]}]}]}';
  return JSON.parse(jsonString);
};

//export default examplePatient;
