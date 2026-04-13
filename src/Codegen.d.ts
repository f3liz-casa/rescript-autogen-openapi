// Hand-written TypeScript declarations for @f3liz/rescript-autogen-openapi
// Following the sury pattern for TypeScript-native ReScript libraries

// ============= JSON Schema Types =============

export type JsonSchemaType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "object"
  | "null"
  | "unknown"
  | { TAG: "Array"; _0: JsonSchemaType };

export interface JsonSchema {
  type?: JsonSchemaType;
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  required?: string[];
  enum?: unknown[];
  $ref?: string;
  allOf?: JsonSchema[];
  oneOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  description?: string;
  format?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  pattern?: string;
  nullable?: boolean;
}

// ============= OpenAPI Types =============

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

export interface MediaType {
  schema?: JsonSchema;
  example?: unknown;
  examples?: Record<string, unknown>;
}

export interface RequestBody {
  description?: string;
  content: Record<string, MediaType>;
  required?: boolean;
}

export interface Response {
  description: string;
  content?: Record<string, MediaType>;
}

export interface Parameter {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  schema?: JsonSchema;
}

export interface Endpoint {
  path: string;
  method: string;
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  requestBody?: RequestBody;
  responses: Record<string, Response>;
  parameters?: Parameter[];
}

export interface PathItem {
  get?: Operation;
  post?: Operation;
  put?: Operation;
  patch?: Operation;
  delete?: Operation;
  head?: Operation;
  options?: Operation;
  parameters?: Parameter[];
}

export interface Operation {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  requestBody?: RequestBody;
  responses: Record<string, Response>;
  parameters?: Parameter[];
}

export interface Components {
  schemas?: Record<string, JsonSchema>;
}

export interface Info {
  title: string;
  version: string;
  description?: string;
}

export interface OpenAPISpec {
  openapi: string;
  info: Info;
  paths: Record<string, PathItem>;
  components?: Components;
}

// ============= Config Types =============

export type GenerationStrategy = "Separate" | "SharedBase";

export type BreakingChangeHandling = "Error" | "Warn" | "Ignore";

export interface ForkSpecConfig {
  name: string;
  specPath: string;
}

export interface GenerationTargets {
  rescriptApi: boolean;
  rescriptWrapper: boolean;
  typescriptDts: boolean;
  typescriptWrapper: boolean;
}

export interface GenerationConfig {
  specPath: string;
  outputDir: string;
  strategy: GenerationStrategy;
  modulePerTag: boolean;
  includeTags?: string[];
  excludeTags?: string[];
  generateDiffReport: boolean;
  breakingChangeHandling: BreakingChangeHandling;
  forkSpecs?: ForkSpecConfig[];
  generateDocOverrides?: boolean;
  docOverrideDir?: string;
  targets?: GenerationTargets;
  dtsOutputDir?: string;
  wrapperOutputDir?: string;
  baseInstanceName?: string;
  baseModulePrefix?: string;
}

// ============= Error Types =============

export interface ErrorContext {
  path: string;
  operation: string;
  schema?: unknown;
}

export type CodegenError =
  | { TAG: "SpecResolutionError"; _0: { url: string; message: string } }
  | { TAG: "SchemaParseError"; _0: { context: ErrorContext; reason: string } }
  | { TAG: "ReferenceError"; _0: { ref: string; context: ErrorContext } }
  | {
      TAG: "ValidationError";
      _0: { schema: string; input: unknown; issues: string[] };
    }
  | {
      TAG: "CircularSchemaError";
      _0: { ref: string; depth: number; path: string };
    }
  | { TAG: "FileWriteError"; _0: { filePath: string; message: string } }
  | { TAG: "InvalidConfigError"; _0: { field: string; message: string } }
  | {
      TAG: "UnknownError";
      _0: { message: string; context?: ErrorContext };
    };

export type Warning =
  | { TAG: "FallbackToJson"; _0: { reason: string; context: ErrorContext } }
  | {
      TAG: "UnsupportedFeature";
      _0: { feature: string; fallback: string; location: string };
    }
  | { TAG: "DepthLimitReached"; _0: { depth: number; path: string } }
  | { TAG: "MissingSchema"; _0: { ref: string; location: string } }
  | {
      TAG: "IntersectionNotFullySupported";
      _0: { location: string; note: string };
    }
  | {
      TAG: "ComplexUnionSimplified";
      _0: { location: string; types: string };
    };

// ============= Diff Types =============

export interface EndpointDiff {
  path: string;
  method: string;
  requestBodyChanged: boolean;
  responseChanged: boolean;
  breakingChange: boolean;
}

export interface SchemaDiff {
  name: string;
  breakingChange: boolean;
}

export interface SpecDiff {
  addedEndpoints: Endpoint[];
  removedEndpoints: Endpoint[];
  modifiedEndpoints: EndpointDiff[];
  addedSchemas: string[];
  removedSchemas: string[];
  modifiedSchemas: SchemaDiff[];
}

// ============= Result Types =============

export interface GenerationSuccess {
  generatedFiles: string[];
  diff?: SpecDiff;
  warnings: Warning[];
}

export type GenerationResult =
  | { TAG: "Ok"; _0: GenerationSuccess }
  | { TAG: "Error"; _0: CodegenError };

export interface ForkSpec {
  name: string;
  spec: OpenAPISpec;
}

// ============= Exported Functions =============

export function generate(config: GenerationConfig): Promise<GenerationResult>;

export function generateFromUrl(
  url: string,
  outputDir: string,
  config?: GenerationConfig
): Promise<GenerationResult>;

export function generateFromFile(
  filePath: string,
  outputDir: string,
  config?: GenerationConfig
): Promise<GenerationResult>;

export function createDefaultConfig(
  url: string,
  outputDir: string
): GenerationConfig;

export function generateSingleSpec(
  spec: OpenAPISpec,
  config: GenerationConfig
): Promise<GenerationResult>;

export function generateSingleSpecPure(
  spec: OpenAPISpec,
  config: GenerationConfig
): GenerationResult;

export function generateMultiSpec(
  baseSpec: OpenAPISpec,
  forkSpecs: ForkSpec[],
  config: GenerationConfig
): Promise<GenerationResult>;

export function generateMultiSpecPure(
  baseSpec: OpenAPISpec,
  forkSpecs: ForkSpec[],
  config: GenerationConfig
): GenerationResult;

export function compareSpecs(
  baseSpec: OpenAPISpec,
  forkSpec: OpenAPISpec,
  baseName?: string,
  forkName?: string,
  outputPath?: string
): Promise<SpecDiff>;
