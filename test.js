import createApiClient from "./apiClient.js";

const testConfig = {
  baseURL: "https://europe-west1-quickstart-1573558070219.cloudfunctions.net",
  headers: {}
};

function runTest() {
  const apiClient = createApiClient(testConfig);

  const batchUrl = "/file-batch-api";
  apiClient.get(batchUrl, {params: {ids: ["fileid1","fileid2"]}});
  apiClient.get(batchUrl, {params: {ids: ["fileid2"]}});
  apiClient.get(batchUrl, {params: {ids: ["fileid3"]}});
}

runTest();
