/* TypeScript file generated from Types.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {t as Config_t} from '../src/types/Config.gen';

export type jsonSchemaType = 
    "String"
  | "Number"
  | "Integer"
  | "Boolean"
  | "Object"
  | "Null"
  | "Unknown"
  | { TAG: "Array"; _0: jsonSchemaType };

export type jsonSchema = {
  readonly type: (undefined | jsonSchemaType); 
  readonly properties: (undefined | {[id: string]: jsonSchema}); 
  readonly items: (undefined | jsonSchema); 
  readonly required: (undefined | string[]); 
  readonly enum: (undefined | unknown[]); 
  readonly "$ref": (undefined | string); 
  readonly allOf: (undefined | jsonSchema[]); 
  readonly oneOf: (undefined | jsonSchema[]); 
  readonly anyOf: (undefined | jsonSchema[]); 
  readonly description: (undefined | string); 
  readonly format: (undefined | string); 
  readonly minLength: (undefined | number); 
  readonly maxLength: (undefined | number); 
  readonly minimum: (undefined | number); 
  readonly maximum: (undefined | number); 
  readonly pattern: (undefined | string); 
  readonly nullable: (undefined | boolean)
};

export type httpMethod = 
    "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

export type mediaType = {
  readonly schema: (undefined | jsonSchema); 
  readonly example: (undefined | unknown); 
  readonly examples: (undefined | {[id: string]: unknown})
};

export type requestBody = {
  readonly description: (undefined | string); 
  readonly content: {[id: string]: mediaType}; 
  readonly required: (undefined | boolean)
};

export type response = { readonly description: string; readonly content: (undefined | {[id: string]: mediaType}) };

export type parameter = {
  readonly name: string; 
  readonly in: string; 
  readonly description: (undefined | string); 
  readonly required: (undefined | boolean); 
  readonly schema: (undefined | jsonSchema)
};

export type operation = {
  readonly operationId: (undefined | string); 
  readonly summary: (undefined | string); 
  readonly description: (undefined | string); 
  readonly tags: (undefined | string[]); 
  readonly requestBody: (undefined | requestBody); 
  readonly responses: {[id: string]: response}; 
  readonly parameters: (undefined | parameter[])
};

export type endpoint = {
  readonly path: string; 
  readonly method: string; 
  readonly operationId: (undefined | string); 
  readonly summary: (undefined | string); 
  readonly description: (undefined | string); 
  readonly tags: (undefined | string[]); 
  readonly requestBody: (undefined | requestBody); 
  readonly responses: {[id: string]: response}; 
  readonly parameters: (undefined | parameter[])
};

export type pathItem = {
  readonly get: (undefined | operation); 
  readonly post: (undefined | operation); 
  readonly put: (undefined | operation); 
  readonly patch: (undefined | operation); 
  readonly delete: (undefined | operation); 
  readonly head: (undefined | operation); 
  readonly options: (undefined | operation); 
  readonly parameters: (undefined | parameter[])
};

export type components = { readonly schemas: (undefined | {[id: string]: jsonSchema}) };

export type info = {
  readonly title: string; 
  readonly version: string; 
  readonly description: (undefined | string)
};

export type openAPISpec = {
  readonly openapi: string; 
  readonly info: info; 
  readonly paths: {[id: string]: pathItem}; 
  readonly components: (undefined | components)
};

export type generationStrategy = "Separate" | "SharedBase";

export type breakingChangeHandling = "Error" | "Warn" | "Ignore";

export type forkSpecConfig = { readonly name: string; readonly specPath: string };

export type generationTargets = {
  readonly rescriptApi: boolean; 
  readonly rescriptWrapper: boolean; 
  readonly typescriptDts: boolean; 
  readonly typescriptWrapper: boolean
};

export type generationConfig = Config_t;

export type forkSpec = { readonly name: string; readonly spec: openAPISpec };

export type errorContext = {
  readonly path: string; 
  readonly operation: string; 
  readonly schema: (undefined | unknown)
};

export type codegenError = 
    { TAG: "SpecResolutionError"; readonly url: string; readonly message: string }
  | { TAG: "SchemaParseError"; readonly context: errorContext; readonly reason: string }
  | { TAG: "ReferenceError"; readonly ref: string; readonly context: errorContext }
  | { TAG: "ValidationError"; readonly schema: string; readonly input: unknown; readonly issues: string[] }
  | { TAG: "CircularSchemaError"; readonly ref: string; readonly depth: number; readonly path: string }
  | { TAG: "FileWriteError"; readonly filePath: string; readonly message: string }
  | { TAG: "InvalidConfigError"; readonly field: string; readonly message: string }
  | { TAG: "UnknownError"; readonly message: string; readonly context: (undefined | errorContext) };

export type warning = 
    { TAG: "FallbackToJson"; readonly reason: string; readonly context: errorContext }
  | { TAG: "UnsupportedFeature"; readonly feature: string; readonly fallback: string; readonly location: string }
  | { TAG: "DepthLimitReached"; readonly depth: number; readonly path: string }
  | { TAG: "MissingSchema"; readonly ref: string; readonly location: string }
  | { TAG: "IntersectionNotFullySupported"; readonly location: string; readonly note: string }
  | { TAG: "ComplexUnionSimplified"; readonly location: string; readonly types: string };

export type endpointDiff = {
  readonly path: string; 
  readonly method: string; 
  readonly requestBodyChanged: boolean; 
  readonly responseChanged: boolean; 
  readonly breakingChange: boolean
};

export type schemaDiff = { readonly name: string; readonly breakingChange: boolean };

export type specDiff = {
  readonly addedEndpoints: endpoint[]; 
  readonly removedEndpoints: endpoint[]; 
  readonly modifiedEndpoints: endpointDiff[]; 
  readonly addedSchemas: string[]; 
  readonly removedSchemas: string[]; 
  readonly modifiedSchemas: schemaDiff[]
};

export type generationSuccess = {
  readonly generatedFiles: string[]; 
  readonly diff: (undefined | specDiff); 
  readonly warnings: warning[]
};

export type generationResult = 
    { TAG: "Ok"; _0: generationSuccess }
  | { TAG: "Error"; _0: codegenError };

export type CodegenError_context = {
  readonly path: string; 
  readonly operation: string; 
  readonly schema: (undefined | unknown)
};

export type CodegenError_t = 
    { TAG: "SpecResolutionError"; readonly url: string; readonly message: string }
  | { TAG: "SchemaParseError"; readonly context: CodegenError_context; readonly reason: string }
  | { TAG: "ReferenceError"; readonly ref: string; readonly context: CodegenError_context }
  | { TAG: "ValidationError"; readonly schema: string; readonly input: unknown; readonly issues: string[] }
  | { TAG: "CircularSchemaError"; readonly ref: string; readonly depth: number; readonly path: string }
  | { TAG: "FileWriteError"; readonly filePath: string; readonly message: string }
  | { TAG: "InvalidConfigError"; readonly field: string; readonly message: string }
  | { TAG: "UnknownError"; readonly message: string; readonly context: (undefined | CodegenError_context) };

export type Warning_t = 
    { TAG: "FallbackToJson"; readonly reason: string; readonly context: CodegenError_context }
  | { TAG: "UnsupportedFeature"; readonly feature: string; readonly fallback: string; readonly location: string }
  | { TAG: "DepthLimitReached"; readonly depth: number; readonly path: string }
  | { TAG: "MissingSchema"; readonly ref: string; readonly location: string }
  | { TAG: "IntersectionNotFullySupported"; readonly location: string; readonly note: string }
  | { TAG: "ComplexUnionSimplified"; readonly location: string; readonly types: string };

export type CodegenError_context = CodegenError_context;

export type CodegenError_t = CodegenError_t;
