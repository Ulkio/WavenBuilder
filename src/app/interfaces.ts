import { Equipement } from './struct';

export interface DialogEquipementInput {
  equipement: Equipement;
  mode: string;
}

export interface FileReaderEventTarget extends EventTarget {
  result: string;
}

export interface FileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget;
}
