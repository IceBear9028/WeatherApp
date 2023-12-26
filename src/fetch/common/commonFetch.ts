import axios, {AxiosError, AxiosProgressEvent, AxiosResponse} from 'axios';

export interface FetchConfigTypes {
  params?: {[index: string]: string | number | boolean};
  body?: {[index: string]: any};
  uploadProgress?: (progress: number) => void;
  downloadProgress?: (progress: number) => void;
  getHeader?: boolean;
  responseType?: 'blob';
  headers?: {[index: string]: string};
}

type BaseResType<D = unknown> = {
  status: 'success' | 'fail' | 'notComm';
  response: null | AxiosResponse<D>;
  time: Date;
};
type SuccessRes<D = unknown> = BaseResType & {
  status: 'success';
  response: AxiosResponse<D>;
};
type FailRes = BaseResType & {
  status: 'fail';
  response: null | AxiosError;
  error: unknown | AxiosError;
};
export type ApiRequestResponseType<T> = SuccessRes<T> | FailRes;

export async function commonFetch<T = any>(
  url: string,
  method: string,
  config?: FetchConfigTypes,
): Promise<ApiRequestResponseType<T>> {
  try {
    let headers = config?.headers
      ? config?.headers
      : {'Content-Type': 'application/json'};
    headers = {
      ...headers,
    };
    const json = await axios({
      url,
      method,
      params: config?.params,
      headers: headers,
      responseType: config?.responseType,
      onUploadProgress: function (progressEvent: AxiosProgressEvent) {
        const percentComplete = Math.floor(
          (progressEvent.loaded / (progressEvent?.total ?? 1)) * 100,
        );
        if (config?.uploadProgress) config.uploadProgress(percentComplete);
      },
      onDownloadProgress: function (progressEvent: AxiosProgressEvent) {
        const percentComplete = Math.floor(
          (progressEvent.loaded / (progressEvent?.total ?? 1)) * 100,
        );
        if (config?.downloadProgress) config.downloadProgress(percentComplete);
      },
      data: config?.body,
    });
    return {
      status: 'success',
      response: json,
      time: new Date(),
    };
  } catch (error: unknown) {
    let response = null;
    if (error instanceof AxiosError && error?.response?.data) {
      response = error.response.data;
    }
    return {
      status: 'fail',
      error: error,
      response,
      time: new Date(),
    };
  }
}
