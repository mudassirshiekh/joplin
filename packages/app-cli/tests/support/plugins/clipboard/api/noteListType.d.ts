import { Size } from './types';
type ListRendererDatabaseDependency = 'folder.created_time' | 'folder.encryption_applied' | 'folder.encryption_cipher_text' | 'folder.icon' | 'folder.id' | 'folder.is_shared' | 'folder.master_key_id' | 'folder.parent_id' | 'folder.share_id' | 'folder.title' | 'folder.updated_time' | 'folder.user_created_time' | 'folder.user_updated_time' | 'folder.type_' | 'note.altitude' | 'note.application_data' | 'note.author' | 'note.body' | 'note.conflict_original_id' | 'note.created_time' | 'note.encryption_applied' | 'note.encryption_cipher_text' | 'note.id' | 'note.is_conflict' | 'note.is_shared' | 'note.is_todo' | 'note.latitude' | 'note.longitude' | 'note.markup_language' | 'note.master_key_id' | 'note.order' | 'note.parent_id' | 'note.share_id' | 'note.source' | 'note.source_application' | 'note.source_url' | 'note.title' | 'note.todo_completed' | 'note.todo_due' | 'note.updated_time' | 'note.user_created_time' | 'note.user_data' | 'note.user_updated_time' | 'note.type_';
export declare enum ItemFlow {
    TopToBottom = "topToBottom",
    LeftToRight = "leftToRight"
}
export type RenderNoteView = Record<string, any>;
export interface OnChangeEvent {
    elementId: string;
    value: any;
    noteId: string;
}
export type OnRenderNoteHandler = (props: any) => Promise<RenderNoteView>;
export type OnChangeHandler = (event: OnChangeEvent) => Promise<void>;
export type ListRendererDepependency = ListRendererDatabaseDependency | 'item.size.width' | 'item.size.height' | 'item.selected' | 'note.titleHtml' | 'note.isWatched';
export interface ListRenderer {
    id: string;
    flow: ItemFlow;
    itemSize: Size;
    itemCss?: string;
    dependencies: ListRendererDepependency[];
    itemTemplate: string;
    label: () => Promise<string>;
    onRenderNote: OnRenderNoteHandler;
    onChange?: OnChangeHandler;
}
export {};
