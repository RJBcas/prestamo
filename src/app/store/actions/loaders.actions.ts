import { createAction, props } from '@ngrx/store';

export const AddLoader = createAction(
  '[Loader] ADD LOADER',
  props<{ loader: string }>()
);

export const RemoveLoader = createAction(
  '[Loader] REMOVE',
  props<{ loader: string }>()
)
