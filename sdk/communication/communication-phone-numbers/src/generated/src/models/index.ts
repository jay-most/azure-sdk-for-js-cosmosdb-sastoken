/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { LROSYM, LROResponseInfo } from "../lro/models";

/** Represents a phone number search request to find phone numbers. Found phone numbers are temporarily held for a following purchase. */
export interface PhoneNumberSearchRequest {
  /** The type of phone numbers to search for, e.g. geographic, or tollFree. */
  phoneNumberType: PhoneNumberType;
  /** The assignment type of the phone numbers to search for. A phone number can be assigned to a person, or to an application. */
  assignmentType: PhoneNumberAssignmentType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The area code of the desired phone number, e.g. 425. */
  areaCode?: string;
  /** The quantity of desired phone numbers. The default value is 1. */
  quantity?: number;
}

/** Capabilities of a phone number. */
export interface PhoneNumberCapabilities {
  /** Capability value for calling. */
  calling: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms: PhoneNumberCapabilityType;
}

/** The result of a phone number search operation. */
export interface PhoneNumberSearchResult {
  /** The search id. */
  searchId: string;
  /** The phone numbers that are available. Can be fewer than the desired search quantity. */
  phoneNumbers: string[];
  /** The phone number's type, e.g. geographic, or tollFree. */
  phoneNumberType: PhoneNumberType;
  /** Phone number's assignment type. */
  assignmentType: PhoneNumberAssignmentType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
  /** The date that this search result expires and phone numbers are no longer on hold. A search result expires in less than 15min, e.g. 2020-11-19T16:31:49.048Z. */
  searchExpiresBy: Date;
}

/** The incurred cost for a single phone number. */
export interface PhoneNumberCost {
  /** The cost amount. */
  amount: number;
  /** The ISO 4217 currency code for the cost amount, e.g. USD. */
  currencyCode: string;
  /** The frequency with which the cost gets billed. */
  billingFrequency: "monthly";
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** The phone number search purchase request. */
export interface PhoneNumberPurchaseRequest {
  /** The search id. */
  searchId?: string;
}

/** Long running operation. */
export interface PhoneNumberOperation {
  /** Status of operation. */
  status: PhoneNumberOperationStatus;
  /** URL for retrieving the result of the operation, if any. */
  resourceLocation?: string;
  /** The date that the operation was created. */
  createdDateTime: Date;
  /** The Communication Services error. */
  error?: CommunicationError;
  /** Id of operation. */
  id: string;
  /** The type of operation, e.g. Search */
  operationType: PhoneNumberOperationType;
  /**
   * The most recent date that the operation was changed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastActionDateTime?: Date;
}

/** Represents an acquired phone number. */
export interface AcquiredPhoneNumber {
  /** The id of the phone number, e.g. 11234567890. */
  id: string;
  /** String of the E.164 format of the phone number, e.g. +11234567890. */
  phoneNumber: string;
  /** The ISO 3166-2 code of the phone number's country, e.g. US. */
  countryCode: string;
  /** The phone number's type, e.g. Geographic, TollFree. */
  phoneNumberType: PhoneNumberType;
  /** Capabilities of a phone number. */
  capabilities: PhoneNumberCapabilities;
  /** The assignment type of the phone number. A phone number can be assigned to a person, or to an application. */
  assignmentType: PhoneNumberAssignmentType;
  /** The date and time that the phone number was purchased. */
  purchaseDate: Date;
  /** The incurred cost for a single phone number. */
  cost: PhoneNumberCost;
}

/** The list of acquired phone numbers. */
export interface AcquiredPhoneNumbers {
  /** Represents a list of phone numbers. */
  phoneNumbers: AcquiredPhoneNumber[];
  /** Represents the URL link to the next page of phone number results. */
  nextLink?: string;
}

/** Capabilities of a phone number. */
export interface PhoneNumberCapabilitiesRequest {
  /** Capability value for calling. */
  calling?: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms?: PhoneNumberCapabilityType;
}

/** Defines headers for PhoneNumbers_searchAvailablePhoneNumbers operation. */
export interface PhoneNumbersSearchAvailablePhoneNumbersHeaders {
  /** URL to retrieve the final result after operation completes. */
  location?: string;
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The search operation id. */
  searchId?: string;
}

/** Defines headers for PhoneNumbers_purchasePhoneNumbers operation. */
export interface PhoneNumbersPurchasePhoneNumbersHeaders {
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The purchase operation id. */
  purchaseId?: string;
}

/** Defines headers for PhoneNumbers_getOperation operation. */
export interface PhoneNumbersGetOperationHeaders {
  /** Url to retrieve the final result after operation completes. */
  location?: string;
}

/** Defines headers for PhoneNumbers_releasePhoneNumber operation. */
export interface PhoneNumbersReleasePhoneNumberHeaders {
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The release operation id. */
  releaseId?: string;
}

/** Defines headers for PhoneNumbers_updateCapabilities operation. */
export interface PhoneNumbersUpdateCapabilitiesHeaders {
  /** URL to retrieve the final result after operation completes. */
  location?: string;
  /** URL to query for status of the operation. */
  operationLocation?: string;
  /** The operation id. */
  operationId?: string;
  /** The capabilities operation id. */
  capabilitiesId?: string;
}

/** Defines values for PhoneNumberType. */
export type PhoneNumberType = "geographic" | "tollFree";
/** Defines values for PhoneNumberAssignmentType. */
export type PhoneNumberAssignmentType = "person" | "application";
/** Defines values for PhoneNumberCapabilityType. */
export type PhoneNumberCapabilityType = "none" | "inbound" | "outbound" | "inbound+outbound";
/** Defines values for PhoneNumberOperationStatus. */
export type PhoneNumberOperationStatus = "notStarted" | "running" | "succeeded" | "failed";
/** Defines values for PhoneNumberOperationType. */
export type PhoneNumberOperationType =
  | "purchase"
  | "releasePhoneNumber"
  | "search"
  | "updatePhoneNumberCapabilities";

/** Optional parameters. */
export interface PhoneNumbersSearchAvailablePhoneNumbersOptionalParams
  extends coreHttp.OperationOptions {
  /** The area code of the desired phone number, e.g. 425. */
  areaCode?: string;
  /** The quantity of desired phone numbers. The default value is 1. */
  quantity?: number;
}

/** Contains response data for the searchAvailablePhoneNumbers operation. */
export type PhoneNumbersSearchAvailablePhoneNumbersResponse = PhoneNumbersSearchAvailablePhoneNumbersHeaders &
  PhoneNumberSearchResult & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PhoneNumberSearchResult;
      /** The parsed HTTP response headers. */
      parsedHeaders: PhoneNumbersSearchAvailablePhoneNumbersHeaders;
      /** The parsed HTTP response headers. */
      [LROSYM]: LROResponseInfo;
    };
  };

/** Contains response data for the getSearchResult operation. */
export type PhoneNumbersGetSearchResultResponse = PhoneNumberSearchResult & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: PhoneNumberSearchResult;
  };
};

/** Optional parameters. */
export interface PhoneNumbersPurchasePhoneNumbersOptionalParams extends coreHttp.OperationOptions {
  /** The search id. */
  searchId?: string;
}

/** Contains response data for the purchasePhoneNumbers operation. */
export type PhoneNumbersPurchasePhoneNumbersResponse = PhoneNumbersPurchasePhoneNumbersHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PhoneNumbersPurchasePhoneNumbersHeaders;
    /** The parsed HTTP response headers. */
    [LROSYM]: LROResponseInfo;
  };
};

/** Contains response data for the getOperation operation. */
export type PhoneNumbersGetOperationResponse = PhoneNumbersGetOperationHeaders &
  PhoneNumberOperation & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: PhoneNumberOperation;
      /** The parsed HTTP response headers. */
      parsedHeaders: PhoneNumbersGetOperationHeaders;
    };
  };

/** Contains response data for the getByNumber operation. */
export type PhoneNumbersGetByNumberResponse = AcquiredPhoneNumber & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AcquiredPhoneNumber;
  };
};

/** Contains response data for the releasePhoneNumber operation. */
export type PhoneNumbersReleasePhoneNumberResponse = PhoneNumbersReleasePhoneNumberHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: PhoneNumbersReleasePhoneNumberHeaders;
    /** The parsed HTTP response headers. */
    [LROSYM]: LROResponseInfo;
  };
};

/** Optional parameters. */
export interface PhoneNumbersListPhoneNumbersOptionalParams extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  top?: number;
}

/** Contains response data for the listPhoneNumbers operation. */
export type PhoneNumbersListPhoneNumbersResponse = AcquiredPhoneNumbers & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AcquiredPhoneNumbers;
  };
};

/** Optional parameters. */
export interface PhoneNumbersUpdateCapabilitiesOptionalParams extends coreHttp.OperationOptions {
  /** Capability value for calling. */
  calling?: PhoneNumberCapabilityType;
  /** Capability value for SMS. */
  sms?: PhoneNumberCapabilityType;
}

/** Contains response data for the updateCapabilities operation. */
export type PhoneNumbersUpdateCapabilitiesResponse = PhoneNumbersUpdateCapabilitiesHeaders &
  AcquiredPhoneNumber & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: AcquiredPhoneNumber;
      /** The parsed HTTP response headers. */
      parsedHeaders: PhoneNumbersUpdateCapabilitiesHeaders;
      /** The parsed HTTP response headers. */
      [LROSYM]: LROResponseInfo;
    };
  };

/** Optional parameters. */
export interface PhoneNumbersListPhoneNumbersNextOptionalParams extends coreHttp.OperationOptions {
  /** An optional parameter for how many entries to skip, for pagination purposes. The default value is 0. */
  skip?: number;
  /** An optional parameter for how many entries to return, for pagination purposes. The default value is 100. */
  top?: number;
}

/** Contains response data for the listPhoneNumbersNext operation. */
export type PhoneNumbersListPhoneNumbersNextResponse = AcquiredPhoneNumbers & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AcquiredPhoneNumbers;
  };
};

/** Optional parameters. */
export interface PhoneNumbersClientOptionalParams extends coreHttp.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
