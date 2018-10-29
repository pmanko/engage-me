export const fetchEndpoints = async () => {
  const response = await fetch('https://open.epic.com/MyApps/EndpointsJson');
  const endpoints = await response.json();

  return endpoints.Entries;
};

export const fetchMetadata = async () => {
  const response = await fetch(
    'https://epicsoapproxyprd.mountsinai.org/FHIR-PRD/api/FHIR/DSTU2/metadata?_format=json'
  );
  const metadata = await response.json();

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
