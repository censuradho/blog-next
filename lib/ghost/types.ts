import { SettingsResponse } from "@tryghost/content-api";
import { ProcessEnvProps } from "lib/processEnv/types";

export interface GhostSettings extends SettingsResponse {
  processEnv: ProcessEnvProps
}