import apiClient from "./apiClient";

function runTest() {
  const batchUrl = "/file-batch-api";
  apiClient.get(batchUrl, {params: {ids: ["fileid1","fileid2"]}});
  apiClient.get(batchUrl, {params: {ids: ["fileid2"]}});
  apiClient.get(batchUrl, {params: {ids: ["fileid3"]}});
}

runTest();
