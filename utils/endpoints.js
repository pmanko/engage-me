export const fetchEndpoints = async () => {
  // const response = await fetch('https://open.epic.com/MyApps/EndpointsJson');
  const endpoints = { Entries: [] }; // await response.json();

  const testing = {
    OrganizationName: 'AA: Open Epic Test',
    FHIRPatientFacingURI: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/'
  };

  endpoints.Entries.unshift(testing);

  // console.warn(endpoints.Entries);

  return endpoints.Entries;
};

export const fetchMetadata = async uri => {
  const response = await fetch(`${uri}metadata?_format=json`);
  const metadata = await response.json();

  // const jp = require('jsonpath');

  // console.warn(jp.query(metadata, '$..software..name'));

  console.warn(metadata.software);
  return metadata;
};

export const fetchPatientData = async () => {
  const response = await fetch(
    `https://r2.smarthealthit.org/Patient/d480b677-02db-4dc9-a537-3d1cd858d69e`
  );

  const patientInfo = await response.json();

  return patientInfo;
};

export const fetchPatientResourceCount = async resource => {
  const response = await fetch(
    `https://r2.smarthealthit.org/${resource}?patient=d480b677-02db-4dc9-a537-3d1cd858d69e`
  );

  const result = await response.json();
  return {
    name: resource,
    count: result.total
  };
};

export default 'fetchEndpoints';
