/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** Acr error response describing why the operation failed */
export interface AcrErrors {
  /** Array of detailed error */
  errors?: AcrErrorInfo[];
}

/** Error information */
export interface AcrErrorInfo {
  /** Error code */
  code?: string;
  /** Error message */
  message?: string;
  /** Error details */
  detail?: any;
}

export interface ManifestListAttributes {
  /** The MIME type of the referenced object. This will generally be application/vnd.docker.image.manifest.v2+json, but it could also be application/vnd.docker.image.manifest.v1+json */
  mediaType?: string;
  /** The size in bytes of the object */
  size?: number;
  /** The digest of the content, as defined by the Registry V2 HTTP API Specification */
  digest?: string;
  /** The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH */
  platform?: Platform;
}

/** The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH */
export interface Platform {
  /** Specifies the CPU architecture, for example amd64 or ppc64le. */
  architecture?: string;
  /** The os field specifies the operating system, for example linux or windows. */
  os?: string;
  /** The optional os.version field specifies the operating system version, for example 10.0.10586. */
  osVersion?: string;
  /** The optional os.features field specifies an array of strings, each listing a required OS feature (for example on Windows win32k */
  osFeatures?: string[];
  /** The optional variant field specifies a variant of the CPU, for example armv6l to specify a particular CPU variant of the ARM CPU. */
  variant?: string;
  /** The optional features field specifies an array of strings, each listing a required CPU feature (for example sse4 or aes */
  features?: string[];
}

/** Docker V2 image layer descriptor including config and layers */
export interface Descriptor {
  /** Layer media type */
  mediaType?: string;
  /** Layer size */
  size?: number;
  /** Layer digest */
  digest?: string;
  /** Specifies a list of URIs from which this object may be downloaded. */
  urls?: string[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations | null;
}

/** Additional information provided through arbitrary metadata. */
export interface Annotations {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Date and time on which the image was built (string, date-time as defined by https://tools.ietf.org/html/rfc3339#section-5.6) */
  created?: Date;
  /** Contact details of the people or organization responsible for the image. */
  authors?: string;
  /** URL to find more information on the image. */
  url?: string;
  /** URL to get documentation on the image. */
  documentation?: string;
  /** URL to get source code for building the image. */
  source?: string;
  /** Version of the packaged software. The version MAY match a label or tag in the source code repository, may also be Semantic versioning-compatible */
  version?: string;
  /** Source control revision identifier for the packaged software. */
  revision?: string;
  /** Name of the distributing entity, organization or individual. */
  vendor?: string;
  /** License(s) under which contained software is distributed as an SPDX License Expression. */
  licenses?: string;
  /** Name of the reference for a target. */
  name?: string;
  /** Human-readable title of the image */
  title?: string;
  /** Human-readable description of the software packaged in the image */
  description?: string;
}

/** Image layer information */
export interface FsLayer {
  /** SHA of an image layer */
  blobSum?: string;
}

/** A list of unstructured historical data for v1 compatibility */
export interface History {
  /** The raw v1 compatibility information */
  v1Compatibility?: string;
}

/** Signature of a signed manifest */
export interface ImageSignature {
  /** A JSON web signature */
  header?: Jwk;
  /** A signature for the image manifest, signed by a libtrust private key */
  signature?: string;
  /** The signed protected header */
  protected?: string;
}

/** A JSON web signature */
export interface Jwk {
  /** JSON web key parameter */
  jwk?: JWKHeader;
  /** The algorithm used to sign or encrypt the JWT */
  alg?: string;
}

/** JSON web key parameter */
export interface JWKHeader {
  /** crv value */
  crv?: string;
  /** kid value */
  kid?: string;
  /** kty value */
  kty?: string;
  /** x value */
  x?: string;
  /** y value */
  y?: string;
}

/** Returns the requested manifest file */
export interface Manifest {
  /** Schema version */
  schemaVersion?: number;
}

/** List of repositories */
export interface Repositories {
  /** Repository names */
  names?: string[];
}

/** Repository attributes */
export interface RepositoryAttributes {
  /** Registry name */
  registry?: string;
  /** Image name */
  imageName?: string;
  /** Image created time */
  createdTime?: string;
  /** Image last update time */
  lastUpdateTime?: string;
  /** Number of the manifests */
  manifestCount?: number;
  /** Number of the tags */
  tagCount?: number;
  /** Changeable attributes */
  changeableAttributes?: ChangeableAttributes;
}

export interface ChangeableAttributes {
  /** Delete enabled */
  deleteEnabled?: boolean;
  /** Write enabled */
  writeEnabled?: boolean;
  /** List enabled */
  listEnabled?: boolean;
  /** Read enabled */
  readEnabled?: boolean;
}

/** Deleted repository */
export interface DeletedRepository {
  /** SHA of the deleted image */
  manifestsDeleted?: string[];
  /** Tag of the deleted image */
  tagsDeleted?: string[];
}

/** List of tag details */
export interface TagList {
  /** Registry name */
  registry?: string;
  /** Image name */
  imageName?: string;
  /** List of tag attribute details */
  tags?: TagAttributesBase[];
}

/** Tag attribute details */
export interface TagAttributesBase {
  /** Tag name */
  name?: string;
  /** Tag digest */
  digest?: string;
  /** Tag created time */
  createdTime?: string;
  /** Tag last update time */
  lastUpdateTime?: string;
  /** Is signed */
  signed?: boolean;
  /** Changeable attributes */
  changeableAttributes?: ChangeableAttributes;
}

/** Tag attributes */
export interface TagAttributes {
  /** Registry name */
  registry?: string;
  /** Image name */
  imageName?: string;
  /** List of tag attribute details */
  attributes?: TagAttributesBase;
}

/** Manifest attributes */
export interface AcrManifests {
  /** Registry name */
  registry?: string;
  /** Image name */
  imageName?: string;
  /** List of manifests */
  manifestsAttributes?: ManifestAttributesBase[];
}

/** Manifest details */
export interface ManifestAttributesBase {
  /** Manifest */
  digest?: string;
  /** Image size */
  imageSize?: number;
  /** Created time */
  createdTime?: string;
  /** Last update time */
  lastUpdateTime?: string;
  /** CPU architecture */
  architecture?: string;
  /** Operating system */
  os?: string;
  /** Media type */
  mediaType?: string;
  /** Config blob media type */
  configMediaType?: string;
  /** List of tags */
  tags?: string[];
  /** Changeable attributes */
  changeableAttributes?: ChangeableAttributes;
}

/** Manifest attributes details */
export interface ManifestAttributes {
  /** Registry name */
  registry?: string;
  /** Image name */
  imageName?: string;
  /** Manifest attributes */
  attributes?: ManifestAttributesBase;
}

export interface Paths108HwamOauth2ExchangePostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Can take a value of access_token_refresh_token, or access_token, or refresh_token */
  grantType: PostContentSchemaGrantType;
  /** Indicates the name of your Azure container registry. */
  service: string;
  /** AAD tenant associated to the AAD credentials. */
  tenant?: string;
  /** AAD refresh token, mandatory when grant_type is access_token_refresh_token or refresh_token */
  refreshToken?: string;
  /** AAD access token, mandatory when grant_type is access_token_refresh_token or access_token. */
  accessToken?: string;
}

export interface RefreshToken {
  /** The refresh token to be used for generating access tokens */
  refreshToken?: string;
}

export interface PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Grant type is expected to be refresh_token */
  grantType: "refresh_token";
  /** Indicates the name of your Azure container registry. */
  service: string;
  /** Which is expected to be a valid scope, and can be specified more than once for multiple scope requests. You obtained this from the Www-Authenticate response header from the challenge. */
  scope: string;
  /** Must be a valid ACR refresh token */
  refreshToken: string;
}

export interface AccessToken {
  /** The access token for performing authenticated requests */
  accessToken?: string;
}

/** Result of the request to list tags of the image */
export interface RepositoryTags {
  /** Name of the image */
  name?: string;
  /** List of tags */
  tags?: string[];
}

/** Tag */
export interface TagAttributesTag {
  /** SignatureRecord value */
  signatureRecord?: string;
}

/** Manifest attributes details */
export interface ManifestAttributesManifestReferences {
  /** Manifest digest */
  digest?: string;
  /** CPU architecture */
  architecture?: string;
  /** Operating system */
  os?: string;
}

/** List of manifest attributes */
export interface ManifestAttributesManifest {
  /** List of manifest attributes details */
  references?: ManifestAttributesManifestReferences[];
  /** Quarantine tag name */
  quarantineTag?: string;
}

/** Changeable attributes */
export interface ManifestChangeableAttributes {
  /** Delete enabled */
  deleteEnabled?: boolean;
  /** Write enabled */
  writeEnabled?: boolean;
  /** List enabled */
  listEnabled?: boolean;
  /** Read enabled */
  readEnabled?: boolean;
  /** Quarantine state */
  quarantineState?: string;
  /** Quarantine details */
  quarantineDetails?: string;
}

/** Returns the requested manifest file */
export type ManifestWrapper = Manifest & {
  /** Media type for this Manifest */
  mediaType?: string;
  /** (ManifestList, OCIIndex) List of V2 image layer information */
  manifests?: ManifestListAttributes[];
  /** (V2, OCI) Image config descriptor */
  config?: Descriptor;
  /** (V2, OCI) List of V2 image layer information */
  layers?: Descriptor[];
  /** (OCI, OCIIndex) Additional metadata */
  annotations?: Annotations | null;
  /** (V1) CPU architecture */
  architecture?: string;
  /** (V1) Image name */
  name?: string;
  /** (V1) Image tag */
  tag?: string;
  /** (V1) List of layer information */
  fsLayers?: FsLayer[];
  /** (V1) Image history */
  history?: History[];
  /** (V1) Image signature */
  signatures?: ImageSignature[];
};

/** Returns the requested Docker multi-arch-manifest file */
export type ManifestList = Manifest & {
  /** Media type for this Manifest */
  mediaType?: string;
  /** List of V2 image layer information */
  manifests?: ManifestListAttributes[];
};

/** Returns the requested Docker V2 Manifest file */
export type V2Manifest = Manifest & {
  /** Media type for this Manifest */
  mediaType?: string;
  /** V2 image config descriptor */
  config?: Descriptor;
  /** List of V2 image layer information */
  layers?: Descriptor[];
};

/** Returns the requested OCI Manifest file */
export type OCIManifest = Manifest & {
  /** V2 image config descriptor */
  config?: Descriptor;
  /** List of V2 image layer information */
  layers?: Descriptor[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations | null;
};

/** Returns the requested OCI index file */
export type OCIIndex = Manifest & {
  /** List of OCI image layer information */
  manifests?: ManifestListAttributes[];
  /** Additional information provided through arbitrary metadata. */
  annotations?: Annotations | null;
};

/** Returns the requested V1 manifest file */
export type V1Manifest = Manifest & {
  /** CPU architecture */
  architecture?: string;
  /** Image name */
  name?: string;
  /** Image tag */
  tag?: string;
  /** List of layer information */
  fsLayers?: FsLayer[];
  /** Image history */
  history?: History[];
  /** Image signature */
  signatures?: ImageSignature[];
};

/** Defines headers for Manifests_create operation. */
export interface ManifestsCreateHeaders {
  /** Identifies the docker upload uuid for the current request. */
  dockerContentDigest?: string;
  /** The canonical location url of the uploaded manifest. */
  location?: string;
  /** The length of the requested blob content. */
  contentLength?: number;
}

/** Defines headers for Blob_get operation. */
export interface BlobGetHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for Blob_check operation. */
export interface BlobCheckHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for Blob_delete operation. */
export interface BlobDeleteHeaders {
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for Blob_mount operation. */
export interface BlobMountHeaders {
  /** Provided location for blob */
  location?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for Blob_getStatus operation. */
export interface BlobGetStatusHeaders {
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for Blob_upload operation. */
export interface BlobUploadHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for Blob_endUpload operation. */
export interface BlobEndUploadHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Digest of the targeted content for the request. */
  dockerContentDigest?: string;
}

/** Defines headers for Blob_startUpload operation. */
export interface BlobStartUploadHeaders {
  /** Provided location for blob */
  location?: string;
  /** Range indicating the current progress of the upload. */
  range?: string;
  /** Identifies the docker upload uuid for the current request. */
  dockerUploadUuid?: string;
}

/** Defines headers for Blob_getChunk operation. */
export interface BlobGetChunkHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Content range of blob chunk. */
  contentRange?: string;
}

/** Defines headers for Blob_checkChunk operation. */
export interface BlobCheckChunkHeaders {
  /** The length of the requested blob content. */
  contentLength?: number;
  /** Content range of blob chunk. */
  contentRange?: string;
}

/** Defines headers for Repository_getList operation. */
export interface RepositoryGetListHeaders {
  /** next paginated result */
  link?: string;
}

/** Known values of {@link PostContentSchemaGrantType} that the service accepts. */
export const enum KnownPostContentSchemaGrantType {
  AccessTokenRefreshToken = "access_token_refresh_token",
  AccessToken = "access_token",
  RefreshToken = "refresh_token"
}

/**
 * Defines values for PostContentSchemaGrantType. \
 * {@link KnownPostContentSchemaGrantType} can be used interchangeably with PostContentSchemaGrantType,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **access_token_refresh_token** \
 * **access_token** \
 * **refresh_token**
 */
export type PostContentSchemaGrantType = string;

/** Optional parameters. */
export interface ManifestsGetOptionalParams extends coreHttp.OperationOptions {
  /** Accept header string delimited by comma. For example, application/vnd.docker.distribution.manifest.v2+json */
  accept?: string;
}

/** Contains response data for the get operation. */
export type ManifestsGetResponse = ManifestWrapper & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ManifestWrapper;
  };
};

/** Contains response data for the create operation. */
export type ManifestsCreateResponse = ManifestsCreateHeaders & {
  /** The parsed response body. */
  body: any;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: any;
    /** The parsed HTTP response headers. */
    parsedHeaders: ManifestsCreateHeaders;
  };
};

/** Optional parameters. */
export interface ManifestsGetListOptionalParams
  extends coreHttp.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
  /** orderby query parameter */
  orderby?: string;
}

/** Contains response data for the getList operation. */
export type ManifestsGetListResponse = AcrManifests & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AcrManifests;
  };
};

/** Contains response data for the getAttributes operation. */
export type ManifestsGetAttributesResponse = ManifestAttributes & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: ManifestAttributes;
  };
};

/** Optional parameters. */
export interface ManifestsUpdateAttributesOptionalParams
  extends coreHttp.OperationOptions {
  /** Repository attribute value */
  value?: ChangeableAttributes;
}

/** Contains response data for the get operation. */
export type BlobGetResponse = BlobGetHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetHeaders;
  };
};

/** Contains response data for the check operation. */
export type BlobCheckResponse = BlobCheckHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobCheckHeaders;
  };
};

/** Contains response data for the delete operation. */
export type BlobDeleteResponse = BlobDeleteHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobDeleteHeaders;
  };
};

/** Contains response data for the mount operation. */
export type BlobMountResponse = BlobMountHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobMountHeaders;
  };
};

/** Contains response data for the getStatus operation. */
export type BlobGetStatusResponse = BlobGetStatusHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetStatusHeaders;
  };
};

/** Contains response data for the upload operation. */
export type BlobUploadResponse = BlobUploadHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobUploadHeaders;
  };
};

/** Contains response data for the endUpload operation. */
export type BlobEndUploadResponse = BlobEndUploadHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobEndUploadHeaders;
  };
};

/** Contains response data for the startUpload operation. */
export type BlobStartUploadResponse = BlobStartUploadHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobStartUploadHeaders;
  };
};

/** Contains response data for the getChunk operation. */
export type BlobGetChunkResponse = BlobGetChunkHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobGetChunkHeaders;
  };
};

/** Contains response data for the checkChunk operation. */
export type BlobCheckChunkResponse = BlobCheckChunkHeaders & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The parsed HTTP response headers. */
    parsedHeaders: BlobCheckChunkHeaders;
  };
};

/** Optional parameters. */
export interface RepositoryGetListOptionalParams
  extends coreHttp.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
}

/** Contains response data for the getList operation. */
export type RepositoryGetListResponse = RepositoryGetListHeaders &
  Repositories & {
    /** The underlying HTTP response. */
    _response: coreHttp.HttpResponse & {
      /** The response body as text (string format) */
      bodyAsText: string;

      /** The response body as parsed JSON or XML */
      parsedBody: Repositories;
      /** The parsed HTTP response headers. */
      parsedHeaders: RepositoryGetListHeaders;
    };
  };

/** Contains response data for the getAttributes operation. */
export type RepositoryGetAttributesResponse = RepositoryAttributes & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RepositoryAttributes;
  };
};

/** Contains response data for the delete operation. */
export type RepositoryDeleteResponse = DeletedRepository & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: DeletedRepository;
  };
};

/** Optional parameters. */
export interface RepositoryUpdateAttributesOptionalParams
  extends coreHttp.OperationOptions {
  /** Repository attribute value */
  value?: ChangeableAttributes;
}

/** Optional parameters. */
export interface TagGetListOptionalParams extends coreHttp.OperationOptions {
  /** Query parameter for the last item in previous query. Result set will include values lexically after last. */
  last?: string;
  /** query parameter for max number of items */
  n?: number;
  /** orderby query parameter */
  orderby?: string;
  /** filter by digest */
  digest?: string;
}

/** Contains response data for the getList operation. */
export type TagGetListResponse = TagList & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: TagList;
  };
};

/** Contains response data for the getAttributes operation. */
export type TagGetAttributesResponse = TagAttributes & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: TagAttributes;
  };
};

/** Optional parameters. */
export interface TagUpdateAttributesOptionalParams
  extends coreHttp.OperationOptions {
  /** Repository attribute value */
  value?: ChangeableAttributes;
}

/** Optional parameters. */
export interface RefreshTokensGetFromExchangeOptionalParams
  extends coreHttp.OperationOptions {
  accessToken?: Paths108HwamOauth2ExchangePostRequestbodyContentApplicationXWwwFormUrlencodedSchema;
}

/** Contains response data for the getFromExchange operation. */
export type RefreshTokensGetFromExchangeResponse = RefreshToken & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: RefreshToken;
  };
};

/** Optional parameters. */
export interface AccessTokensGetOptionalParams
  extends coreHttp.OperationOptions {
  refreshToken?: PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema;
}

/** Contains response data for the get operation. */
export type AccessTokensGetResponse = AccessToken & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AccessToken;
  };
};

/** Contains response data for the getFromLogin operation. */
export type AccessTokensGetFromLoginResponse = AccessToken & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: AccessToken;
  };
};

/** Optional parameters. */
export interface GeneratedClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
