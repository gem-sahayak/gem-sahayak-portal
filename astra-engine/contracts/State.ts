import { ScannedFile } from './Scanner';

export interface IAstraState {
  timestamp: Date;
  filesystem: {
    files: Map<string, ScannedFile>;
    rootPath: string;
  };
  parsedRegistry: {
    articles: any[];
    categories: any[];
    tools: any[];
    faqs: any[];
  };
  metadataMap: Map<string, any>;
  linkingGraph: {
    nodes: any[];
    edges: any[];
  };
}

export interface IStateManager {
  getStateSnapshot(): IAstraState;
  updateState(updater: (state: IAstraState) => void): void;
}
