export interface AstraEvent {
  type: string;
  payload: any;
  timestamp: Date;
}

export type AstraEventListener = (event: AstraEvent) => Promise<void> | void;

export interface IEventBus {
  on(eventType: string, listener: AstraEventListener): void;
  off(eventType: string, listener: AstraEventListener): void;
  emit(eventType: string, payload: any): Promise<void>;
}
