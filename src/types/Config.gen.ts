/* TypeScript file generated from Config.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ConfigJS from './Config.res.mjs';

export type generationStrategy = "Separate" | "SharedBase";

export type breakingChangeHandling = "Error" | "Warn" | "Ignore";

export type forkSpecConfig = { readonly name: string; readonly specPath: string };

export type generationTargets = {
  readonly rescriptApi: boolean; 
  readonly rescriptWrapper: boolean; 
  readonly typescriptDts: boolean; 
  readonly typescriptWrapper: boolean
};

export type t = {
  readonly specPath: string; 
  readonly forkSpecs: (undefined | forkSpecConfig[]); 
  readonly outputDir: string; 
  readonly strategy: generationStrategy; 
  readonly modulePerTag: boolean; 
  readonly includeTags: (undefined | string[]); 
  readonly excludeTags: (undefined | string[]); 
  readonly generateDiffReport: boolean; 
  readonly breakingChangeHandling: breakingChangeHandling; 
  readonly generateDocOverrides: (undefined | boolean); 
  readonly docOverrideDir: (undefined | string); 
  readonly targets: (undefined | generationTargets); 
  readonly dtsOutputDir: (undefined | string); 
  readonly wrapperOutputDir: (undefined | string); 
  readonly baseInstanceName: (undefined | string); 
  readonly baseModulePrefix: (undefined | string)
};

export const make: (specPath:string, outputDir:string, strategy:(undefined | generationStrategy), modulePerTag:(undefined | boolean), includeTags:(undefined | string[]), excludeTags:(undefined | string[]), generateDiffReport:(undefined | boolean), breakingChangeHandling:(undefined | breakingChangeHandling), forkSpecs:(undefined | forkSpecConfig[]), generateDocOverrides:(undefined | boolean), docOverrideDir:(undefined | string), targets:(undefined | generationTargets), dtsOutputDir:(undefined | string), wrapperOutputDir:(undefined | string), baseInstanceName:(undefined | string), baseModulePrefix:(undefined | string), _17:void) => t = ConfigJS.make as any;
