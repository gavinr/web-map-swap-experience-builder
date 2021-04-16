import { ImmutableObject } from 'seamless-immutable';

export interface Config {
  webMapIds: string[];
}

export type IMConfig = ImmutableObject<Config>;
