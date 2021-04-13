import { createAction, props } from '@ngrx/store';





export const setLoadingSpinner = createAction('[Spinner] set loading', props<{status: boolean}>());


