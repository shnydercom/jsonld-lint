/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JsonLdDocumentTerm } from "./JsonLdDocumentTerm";
import {
  JsonLdDocumentSyntaxError,
  JsonLdDocumentSyntaxErrorRule
} from "./JsonLdDocumentSyntaxError";
import { JsonLdDocumentLintResult } from "./JsonLdDocumentLintResult";

export { DocumentPosition } from "./DocumentPosition";
export {
  JsonLdLintError,
  JsonLdLintErrorName,
  JsonLdLintErrorType
} from "./JsonLdLintError";
export { JsonLdLintOptions } from "./JsonLdLintOptions";
export { JsonLdDocumentLintRule } from "./JsonLdDocumentLintRule";
export { JsonLdDocumentProcessingContext } from "./JsonLdDocumentProcessingContext";
export { JsonLdDocumentTermProcessingResult } from "./JsonLdDocumentTermProcessingResult";
export { JsonLdDocumentValue } from "./JsonLdDocumentValue";
export { JsonLdDocumentValueProcessingResult } from "./JsonLdDocumentValueProcessingResult";
export { KnownJsonLdTerm } from "./KnownJsonLdTerm";
export { JsonLdDocumentProcessingResultType } from "./JsonLdDocumentProcessingResult";
export { JsonLdObjectType } from "./JsonLdObjectType";
export { ContextResolver } from "./ContextResolver";

export {
  JsonLdDocumentSyntaxError,
  JsonLdDocumentSyntaxErrorRule,
  JsonLdDocumentTerm,
  JsonLdDocumentLintResult
};

export type JsonLdDocumentProcessingResult =
  | JsonLdDocumentTerm
  | JsonLdDocumentSyntaxError
  | JsonLdDocumentLintResult;
