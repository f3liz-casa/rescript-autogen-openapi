/* TypeScript file generated from CodegenError.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type context = {
  readonly path: string; 
  readonly operation: string; 
  readonly schema: (undefined | unknown)
};

export type t = 
    { TAG: "SpecResolutionError"; readonly url: string; readonly message: string }
  | { TAG: "SchemaParseError"; readonly context: context; readonly reason: string }
  | { TAG: "ReferenceError"; readonly ref: string; readonly context: context }
  | { TAG: "ValidationError"; readonly schema: string; readonly input: unknown; readonly issues: string[] }
  | { TAG: "CircularSchemaError"; readonly ref: string; readonly depth: number; readonly path: string }
  | { TAG: "FileWriteError"; readonly filePath: string; readonly message: string }
  | { TAG: "InvalidConfigError"; readonly field: string; readonly message: string }
  | { TAG: "UnknownError"; readonly message: string; readonly context: (undefined | context) };

export type Warning_t = 
    { TAG: "FallbackToJson"; readonly reason: string; readonly context: context }
  | { TAG: "UnsupportedFeature"; readonly feature: string; readonly fallback: string; readonly location: string }
  | { TAG: "DepthLimitReached"; readonly depth: number; readonly path: string }
  | { TAG: "MissingSchema"; readonly ref: string; readonly location: string }
  | { TAG: "IntersectionNotFullySupported"; readonly location: string; readonly note: string }
  | { TAG: "ComplexUnionSimplified"; readonly location: string; readonly types: string };
